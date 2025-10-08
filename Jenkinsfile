pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'sc-boys-hostel'
        DOCKER_TAG = "${BUILD_NUMBER}"
        DOCKER_REGISTRY = 'your-registry.com' // Update with your registry
        KUBECONFIG = credentials('kubeconfig') // Jenkins credential for kubeconfig
        DOCKER_CREDENTIALS = credentials('docker-registry-credentials')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Code checked out successfully'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh '''
                        echo "Installing Node.js dependencies..."
                        npm ci
                    '''
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    sh '''
                        echo "Running tests..."
                        npm test -- --coverage --watchAll=false
                    '''
                }
            }
            post {
                always {
                    publishTestResults testResultsPattern: 'coverage/lcov.info'
                }
            }
        }
        
        stage('Build Application') {
            steps {
                script {
                    sh '''
                        echo "Building React application..."
                        npm run build
                    '''
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    sh '''
                        echo "Building Docker image..."
                        docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                        docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
                    '''
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    sh '''
                        echo "Pushing Docker image to registry..."
                        echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin ${DOCKER_REGISTRY}
                        docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker tag ${DOCKER_IMAGE}:latest ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest
                        docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest
                    '''
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh '''
                        echo "Deploying to Kubernetes..."
                        
                        # Apply namespace first
                        kubectl apply -f k8s/namespace.yaml
                        
                        # Apply ConfigMap
                        kubectl apply -f k8s/configmap.yaml
                        
                        # Update deployment image
                        sed -i "s|image: sc-boys-hostel:latest|image: ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}|g" k8s/deployment.yaml
                        
                        # Apply all Kubernetes manifests
                        kubectl apply -f k8s/deployment.yaml
                        kubectl apply -f k8s/service.yaml
                        kubectl apply -f k8s/ingress.yaml
                        
                        # Wait for deployment to be ready
                        kubectl rollout status deployment/sc-boys-hostel-deployment -n sc-boys-hostel --timeout=300s
                        
                        # Verify deployment
                        kubectl get pods -n sc-boys-hostel
                        kubectl get services -n sc-boys-hostel
                    '''
                }
            }
        }
        
        stage('Health Check') {
            steps {
                script {
                    sh '''
                        echo "Performing health check..."
                        # Wait for pods to be ready
                        kubectl wait --for=condition=ready pod -l app=sc-boys-hostel -n sc-boys-hostel --timeout=300s
                        
                        # Get service endpoint for testing
                        kubectl get ingress sc-boys-hostel-ingress -n sc-boys-hostel
                    '''
                }
            }
        }
    }
    
    post {
        always {
            script {
                sh '''
                    # Cleanup local Docker images
                    docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG} || true
                    docker rmi ${DOCKER_IMAGE}:latest || true
                    docker rmi ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG} || true
                    docker rmi ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest || true
                '''
            }
        }
        success {
            echo 'Pipeline succeeded! SC Boys Hostel website deployed successfully.'
            // Add notification here (Slack, email, etc.)
        }
        failure {
            echo 'Pipeline failed! Check logs for details.'
            // Add failure notification here
        }
    }
}
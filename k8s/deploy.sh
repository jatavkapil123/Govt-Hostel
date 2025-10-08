#!/bin/bash

# SC Boys Hostel Kubernetes Deployment Script
set -e

echo "🏠 Deploying SC Boys Hostel Website to Kubernetes..."

# Check if kubectl is available
if ! command -v kubectl &> /dev/null; then
    echo "❌ kubectl is not installed. Please install kubectl first."
    exit 1
fi

# Apply namespace
echo "📁 Creating namespace..."
kubectl apply -f k8s/namespace.yaml

# Apply ConfigMap
echo "⚙️ Applying ConfigMap..."
kubectl apply -f k8s/configmap.yaml

# Apply Service
echo "🔗 Creating Service..."
kubectl apply -f k8s/service.yaml

# Apply Deployment
echo "🚀 Deploying application..."
kubectl apply -f k8s/deployment.yaml

# Apply Ingress
echo "🌐 Setting up Ingress..."
kubectl apply -f k8s/ingress.yaml

# Wait for deployment to be ready
echo "⏳ Waiting for deployment to be ready..."
kubectl rollout status deployment/sc-boys-hostel-deployment -n sc-boys-hostel --timeout=300s

# Show deployment status
echo "✅ Deployment completed!"
echo ""
echo "📊 Deployment Status:"
kubectl get pods -n sc-boys-hostel
echo ""
echo "🔗 Services:"
kubectl get services -n sc-boys-hostel
echo ""
echo "🌐 Ingress:"
kubectl get ingress -n sc-boys-hostel

echo ""
echo "🎉 SC Boys Hostel website is now deployed!"
echo "📝 Update the ingress host in k8s/ingress.yaml with your actual domain"
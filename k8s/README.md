# SC Boys Hostel - Kubernetes Deployment

This directory contains Kubernetes manifests for deploying the Government SC Boys Hostel website.

## Files Overview

- `namespace.yaml` - Creates dedicated namespace for the application
- `deployment.yaml` - Main application deployment with 3 replicas
- `service.yaml` - ClusterIP service to expose the application internally
- `ingress.yaml` - Ingress configuration for external access
- `configmap.yaml` - Nginx configuration for serving React app
- `deploy.sh` - Automated deployment script

## Prerequisites

1. **Kubernetes Cluster** - Running Kubernetes cluster
2. **kubectl** - Configured to connect to your cluster
3. **Ingress Controller** - NGINX Ingress Controller installed
4. **Docker Image** - Built and pushed to registry

## Quick Deployment

### Option 1: Using the deployment script
```bash
# Make script executable (if not already)
chmod +x k8s/deploy.sh

# Run deployment
./k8s/deploy.sh
```

### Option 2: Manual deployment
```bash
# Apply all manifests
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/ingress.yaml

# Check deployment status
kubectl get pods -n sc-boys-hostel
kubectl get services -n sc-boys-hostel
kubectl get ingress -n sc-boys-hostel
```

## Configuration

### Update Domain
Before deploying, update the domain in `ingress.yaml`:
```yaml
spec:
  tls:
  - hosts:
    - your-hostel-domain.com  # Update this
  rules:
  - host: your-hostel-domain.com  # Update this
```

### Update Docker Image
In `deployment.yaml`, update the image reference:
```yaml
containers:
- name: sc-boys-hostel
  image: your-registry.com/sc-boys-hostel:latest  # Update this
```

## Monitoring

### Check Pod Status
```bash
kubectl get pods -n sc-boys-hostel -w
```

### View Logs
```bash
kubectl logs -f deployment/sc-boys-hostel-deployment -n sc-boys-hostel
```

### Describe Resources
```bash
kubectl describe deployment sc-boys-hostel-deployment -n sc-boys-hostel
kubectl describe service sc-boys-hostel-service -n sc-boys-hostel
kubectl describe ingress sc-boys-hostel-ingress -n sc-boys-hostel
```

## Scaling

### Scale Deployment
```bash
kubectl scale deployment sc-boys-hostel-deployment --replicas=5 -n sc-boys-hostel
```

## Cleanup

### Remove All Resources
```bash
kubectl delete namespace sc-boys-hostel
```

## Troubleshooting

### Common Issues

1. **Pods not starting**: Check image availability and resource limits
2. **Service not accessible**: Verify service selector matches pod labels
3. **Ingress not working**: Ensure ingress controller is installed and domain is configured

### Debug Commands
```bash
# Check events
kubectl get events -n sc-boys-hostel --sort-by='.lastTimestamp'

# Check pod details
kubectl describe pod <pod-name> -n sc-boys-hostel

# Access pod shell
kubectl exec -it <pod-name> -n sc-boys-hostel -- /bin/sh
```
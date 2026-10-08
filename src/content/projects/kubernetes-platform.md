---
title: Kubernetes-as-a-Service Platform
summary: An internal platform architecture connecting portal workflows to OpenStack-backed Kubernetes lifecycle management through CAPI and CAPO.
challenge: Abstract cloud resource preparation and Kubernetes lifecycle operations behind a repeatable platform workflow without hiding infrastructure constraints.
highlight: Create · scale · delete lifecycle through infrastructure APIs
role: Platform engineering
technologies:
  - Kubernetes
  - CAPI / CAPO
  - FastAPI
  - OpenStack
context: Internal platform architecture
featured: true
draft: false
order: 3
---

## Architecture

The verified platform flow was:

**Internal portal → FastAPI orchestration layer → OpenStack project and resource preparation → Cluster API → CAPO → Kubernetes cluster creation**

The FastAPI layer coordinated infrastructure and lifecycle operations rather than exposing every underlying cloud concern directly to the portal.

## Platform capabilities

- Configurable control-plane and worker topology.
- Flavor selection for control-plane and worker nodes.
- OpenStack project isolation and resource preparation.
- Cluster creation, scaling, and deletion workflows.
- Octavia integration for load balancing.
- Floating IP handling and Calico networking.

## Architecture reasoning

Cluster API and CAPO provided a declarative lifecycle model over OpenStack infrastructure. This kept cluster operations tied to infrastructure APIs and made topology choices explicit while giving the internal portal a narrower service interface.

Magnum, Kamaji, and Gardener were evaluated as relevant approaches. Their evaluation is noted here without implying that every option was used in production. Kamaji was also considered in relation to control-plane architecture.

The work demonstrates platform engineering through abstraction, orchestration, repeatability, and lifecycle ownership—not simply the deployment of Kubernetes components.

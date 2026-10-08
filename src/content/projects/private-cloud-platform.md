---
title: Multi-Datacenter OpenStack Modernization
summary: Controlled modernization of highly available OpenStack infrastructure across multiple locations and more than 100 compute nodes.
challenge: Upgrade and modernize established cloud environments while controlling migration risk, preserving service continuity, and improving repeatability.
highlight: 100+ compute nodes · 3 datacenter upgrades · 3+ major versions
role: Cloud engineering
technologies:
  - OpenStack
  - OVN
  - OpenStack-Ansible
  - Kolla-Ansible
context: Private cloud modernization
featured: true
draft: false
order: 1
---

## Context

At GreenPlus, I worked on large, highly available OpenStack environments distributed across infrastructure locations in Mashhad, Tabriz, Shiraz, and Tehran. The environments included more than 100 compute nodes and core services such as Nova, Neutron, Cinder, Glance, and Octavia.

I also participated in launching a new Tebyan cloud environment.

## Constraints

Modernizing an established cloud means changing control-plane and infrastructure components without treating production as a clean-slate deployment. The work had to account for service dependencies, networking, storage integration, operational procedures, and migration risk across different environments.

## Engineering work

- Worked across highly available OpenStack services, OVN networking, and operational automation.
- Used both OpenStack-Ansible and Kolla-Ansible in deployment and modernization work.
- Contributed to migration and modernization of legacy cloud environments.
- Supported repeatable operations through automation, documentation, and runbooks.

## Verified result

I contributed to OpenStack upgrades across three datacenters, covering more than three major versions, without product downtime.

The work emphasized controlled change, maintainable operations, and a repeatable path for future platform evolution rather than a one-off migration.

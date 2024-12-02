---
sidebar_position: 1
---

# Introduction

## Platform Overview

SYNQ Technology makes a platform that’s centered on connecting customers in a physical
retail setting that need help, with the associate that can help them in the most efficient
way. In-store technology for customers to request help today is largely analog, with tools
that provide no assurance to the customer and no data to the retailers.

Made up of 19 modules, SYNQ Frontline Hero enables texting for help, QR-based help
requests via a customer’s smartphone, a digital last mile for curbside pick-up of online
orders, and BISPUN (buy in-store pick up now) - a methodology SYNQ invented that allows
customers to shop friction items (locked, oversize, out of stock) at a SKU level directly from
their smartphone for fulfillment in the store.

In the following sections, you’ll find details on SYNQ’s system architecture, system
requirements, deployment steps, and guidance for architecting the Microsoft Teams
channels.

## Solution Architecture
SYNQ’s system architecture is designed to deliver a seamless and efficient experience
directly through Microsoft Teams. As shown in the architecture diagram below, SYNQ's
products are integrated within a robust cloud environment, hosted on Microsoft Azure,
ensuring reliability, scalability, and security.

The architecture is centered around the interaction between the customer's device and our
cloud services via Microsoft Teams. Customers initiate their journey by scanning a QR code
with their device, which in turn notifies associates via Microsoft Teams. This leads the
associate into Teams and/or the SYNQ Portal to take action on the customer request.
Within Teams, they engage through chats, access various app tabs, and utilize task views
that enhance their user experience and streamline their interactions.

### Cloud Services
Our services are encapsulated within the SYNQ Cloud, which operates on the Microsoft
Azure platform. This setup ensures that the system maintains high performance and
availability. The SYNQ Microsoft Teams Bot acts as the primary interface, managing
communication between the Teams environment and our backend services

### SYNQ Modules
Inside the SYNQ Cloud, the SYNQ Frontline Hero application acts as the hub, housing key
modules, including but not limited to: SYNQ Order Up, SYNQ Call for Help, SYNQ Curbside,
SYNQ Text for Help, SYNQ Touchless Lockers API, and SYNQ Pulse (IoT). These modules are
designed to address a wide range of use cases in the frontline worker space.

### Database Integration
At the foundation of our architecture are several databases that support all interactions
and transactions. It ensures data consistency and real-time updates across the platform,
driving a cohesive, responsive user experience.

### Architecture Diagram
![Architecture Diagram](/img/synq-high-level.png)

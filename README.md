# README: GearGuard - The Ultimate Maintenance Tracker

## Project Overview

**GearGuard** is an Odoo-based maintenance management system designed to streamline how companies track assets and manage repair workflows. The module bridges the gap between physical **Equipment**, the specialized **Teams** responsible for them, and the **Maintenance Requests** that keep operations running smoothly.

---

## Key Functional Areas

### 1. Equipment Management

The module acts as a centralized database for all company assets, such as machines, vehicles, and computers.

* 
**Asset Tracking**: Records ownership by Department (e.g., Production) or Employee (e.g., Laptop owner).


* 
**Technical Details**: Stores critical data including Serial Numbers, Purchase Dates, Warranty Information, and physical Location.


* 
**Default Responsibility**: Each piece of equipment is pre-assigned to a specific Maintenance Team and a default technician.



### 2. Maintenance Teams

Supports specialized workforce organization to ensure the right people handle the right jobs.

* 
**Specializations**: Define teams such as Mechanics, Electricians, or IT Support.


* 
**User Linking**: Link specific Odoo users (Technicians) to their respective teams.


* 
**Workflow Integrity**: Logic ensures that only members of the assigned team can pick up relevant requests.



### 3. Maintenance Requests

Handles the full lifecycle of a repair job, categorized into two types:

* 
**Corrective**: Unplanned repairs for equipment breakdowns.


* 
**Preventive**: Planned routine checkups and scheduled maintenance.



---

## Functional Workflows

### Flow 1: Breakdown (Corrective)

1. 
**Creation**: Any user can initiate a request.


2. 
**Auto-Fill**: Selecting an equipment record automatically populates the Equipment Category and Maintenance Team.


3. 
**Lifecycle**: The request moves through stages: **New**  **In Progress**  **Repaired**.


4. 
**Data Capture**: Technicians record the "Hours Spent" (Duration) upon completion.



### Flow 2: Routine Checkup (Preventive)

1. 
**Scheduling**: Managers create preventive requests and set a **Scheduled Date**.


2. 
**Visibility**: These tasks appear on a **Calendar View**, allowing technicians to plan their workload.



---

## User Interface & Features

* 
**Maintenance Kanban Board**: The primary workspace featuring drag-and-drop functionality between stages (New, In Progress, Repaired, Scrap).


* 
**Visual Indicators**: Requests display the assigned technician's avatar and turn red if the task is overdue.


* 
**Smart Buttons**: The Equipment form includes a "Maintenance" button that displays a count of open requests and filters the list to that specific machine.


* 
**Scrap Logic**: Moving a request to the "Scrap" stage triggers a system flag indicating the equipment is no longer usable.


* 
**Reporting**: Pivot and Graph reports provide insights into the number of requests per Team or Equipment Category.


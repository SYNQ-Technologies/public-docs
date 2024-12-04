---
sidebar_position: 1
---

# Introduction
SYNQ Touchless Lockers provide a secure way to transfer products to and from customers, coordinated via simple interactions over customer smartphones (there are also associate-supported workflows for customers without such devices). Via cloud-hosted software, SYNQ Touchless Lockers communicate between staff and customer devices to ensure efficient, intuitive workflows.  

Software integrations to accommodate existing third-party software workflows (brokering picking, point-of-sale, returns) are generally straightforward through our APIs, which are engineered to be highly extensible should a specific customer use case or software implementation pattern require additional integration points.

## Hardware
### Dimensions and weight:
SYNQ Touchless Lockers can be manufactured in a variety of sizes. Our standard full-size unit design is 65” wide x 78” high x 18” deep (165cm x 198cm x 45cm), but we can manufacture to custom dimensions. We provide custom internal cube sizes/configurations to match your product lines and requirements. The number and size of compartments is typically determined via a needs assessment that includes a SKU cube analysis to plan an optimal configuration, while also not limiting future versatility. 

Unit weight is dependent on model, configuration and compartment sizes, but customers should be aware that SYNQ Touchless Lockers are engineered to be solid and portability has not been a design focus. For example, our standard full-size unit design presented at NRF 2022: Retail’s Big Show in New York City was approximately 600lbs/275KG (comprised of 8 modules each weighing approximately 75lbs/35KG). Note that for safety reasons, SYNQ Touchless Lockers should always be secured to physical infrastructure; they can be bolted to the floor or a wall, or wired to a wall. Nonetheless, they can be reconfigured on site as required. SYNQ Touchless Lockers require 1000W power and Ethernet connectivity. 

### Materials:  
SYNQ Touchless Lockers are constructed of high-quality 20-gauge powder-coated stainless steel for robustness, security, and ease of maintenance/sanitization. It also looks and feels beautiful. They are available in any color (black is the default), and can be branded with custom graphics.

Front/compartment doors can be opaque, translucent, or transparent (or any combination of these for the various compartments). Clear LEXAN delivers ideal, well-rounded properties (strength, clarity, relatively low replacement cost) and is our default material. The primary downside is that LEXAN is easier than Plexiglass to scratch, and minor scratches cannot be polished away. However, as with all our product engineering, key aspects SYNQ Touchless Lockers are deliberately designed for straightforward in-house field maintenance by non-specialist staff; our LEXAN windows can be quickly and easily replaced by in the event of vandalism or other damage. Compartment doors can also be customized to meet a customer’s specific requirements (e.g. bulletproof glass, wire mesh, various films). 

Interior compartments are constructed of high-density fiber board, which can be color matched to the locker, or use a standard interior white finish (which looks great).

### Lighting:
White and colored LED lighting used to attractively illuminate locker contents and add visual interest to the installation. They are also used to communicate information to associates and customers, including which locker is an assigned locker as well as imminent open/close and security status. If opaque doors are specified, identification/communication LEDs are installed on the exterior of compartments SYNQ Touchless Lockers are illuminated using a combination of customizable/programmable multi-color and/or standard LED lights. Colored LEDs are used to communicate with users in the following ways:

1.	An internal blue light illuminates for a user to identify which unit is theirs for the transaction.
2.	A green light illuminates to indicate initiation of the door opening process.
3.	A yellow light, followed by a flashing red light, warns users of the door closing process.
4.	Customizable light scheme while Touchless locker is in standby mode.

### Additional options: 
We offer a variety of customization/enhancement options that sometimes apply to specific customer use cases: 
- Enhanced security features
- IP68 weather/liquid/dust resistance* 
- Heated and cooled compartments*
- Positive pressure HEPA compartments for lab samples* 
- Compartments filled from the back*

Though we are prototyping four-season outdoor locker designs, there are substantially different design considerations and the SYNQ Touchless Lockers contemplated herein are designed for indoor use. 


## Requirements
- Power (1000W)
- Ethernet connectivity
- Network must have DHCP enabled
- Network must allow access to Google Public DNS IP addresses: `8.8.8.8` and `8.8.4.4` on port `53`
- Network must allow access to Google Public Network Time Protocol (NTP) server `time.google.com` on port `123`

## Add a Locker
1. Sign into __MyStore__
2. Select __Locker__
3. Click __Launch__
4. Click __Add a new locker__
5. Enter the following information:
   - Name
   - Cabinet amount
   - Location/Organization
   - Timer
6. Click __Submit__

## Enable a Locker as an OrderUp Dropzone
1. Sign into __MyStore__
2. Select __Picking Utility__
3. Click __Settings__
4. Enable the __Enable Locker Dropoff__ setting

## Light Sequences
- Multi-color: Ready.
- One locker is blue, all others red: that locker is about to open.
- One locker is green, all others red: that locker is open/opening.
- One locker is flashing yellow followed by flashing red: that locker is closing.
- Steady Dim Red: Raspberry Pi is not running.
- Flashing Red: Ethernet/Unable to connect.

## Troubleshooting
- What light sequence (if any) do the locker show?
- Are you able to see the Raspberry Pi? Is it running with the green activity LED blinking periodically, and the Ethernet LEDs active?
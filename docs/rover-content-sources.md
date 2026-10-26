# Rover content sources

These notes support the content in `src/content/projects/`. Display names can change without changing the filenames or saved explorer selections.

## Team-confirmed history

The team supplied these corrections on October 26, 2026:

- The 2023–2024 sections included **Payload**, with no Mission Control section.
- From 2024–2025 onward, **Mission Control** replaced Payload, covered the year's science task, and worked on a servo-actuated scoop arm beneath the rover.
- The other technical sections are Chassis, Robotic Arm, Communication Operations, Electrical, and Embedded.

The archived leadership records independently preserve the Payload/Mission Control transition. They are used as historical evidence, not as rover-design content or as links in the design pane.

## Names and season boundaries

The [organization's repository guide](https://github.com/UMRoboticsTeam/.github/blob/main/profile/README.md) identifies `umrt-ros` and the Arduino arm controller with Prairie Pioneer, and `umrt-drivetrain-ros` with Project Perry. The website's three GLB files and the 2024 field photo provide additional name evidence. Prairie Panther is explicitly named in the 2025–2026 archive.

Use code snapshots from the season being described. A repository's current default branch can include work from later years.

## 2023–2024 — Prairie Pioneer

| Area | Evidence | Source |
| --- | --- | --- |
| Embedded/drivetrain | Four wheel commands converted into PWM; separate drivetrain/peripheral/base-station launches | [August 12, 2024 drivetrain](https://github.com/UMRoboticsTeam/umrt-ros/blob/47211bff4b9fc2855c530b28ccef6df13655ec44/src/example_2/hardware/diffbot_system.cpp) |
| Rover peripherals | DepthAI camera and serial GPS launch | [Peripheral launch](https://github.com/UMRoboticsTeam/umrt-ros/blob/47211bff4b9fc2855c530b28ccef6df13655ec44/launch/robot_peripherals.launch.py) |
| Base station | Joystick input and video decoding | [Base-station launch](https://github.com/UMRoboticsTeam/umrt-ros/blob/47211bff4b9fc2855c530b28ccef6df13655ec44/launch/base_station.launch.py) |
| Arm | Arduino/Firmata stepper commands, fixed moves, and gripper servo positioning | [July 22, 2024 control library](https://github.com/UMRoboticsTeam/umrt-arm-firmware-lib/blob/dd2538e125d9a74b2341b8e07a88c7a66a2d196c/StepperController.h) |
| Payload task context | Environmental Assessment: site documentation, separate soil samples, contamination investigation, report | [Official 2024 brief](https://circ.cstag.ca/2024/tasks/#environmental-assessment) |

The drivetrain code simulates state feedback; it does not establish measured wheel odometry. The integration whiteboard records plans and checklists, including a scoop; it does not establish completion of every listed item.

### Recovered photos

Two original UMRT photos were recovered from the website's Git history. Their addition is recorded in commit `11fcc88` on September 10, 2024; the originals are also present in the final Nuxt tree at `c850141^1`.

| Current file | Historical path | Use |
| --- | --- | --- |
| `src/content/projects/images/2024-electronics-layout.jpg` | `assets/images/showcase/IMG_5472.jpg` | Open frame, internal equipment deck, distribution/controller wiring |
| `src/content/projects/images/2024-integration-plan.jpg` | `assets/images/showcase/IMG_5479.jpg` | Integration planning across sections, including Payload scoop work |

Existing first-year archive photos supply the completed rover, arm assembly, and portable directional-antenna setup. Old generic subsystem stock images were excluded.

## 2024–2025 — Project Perry

| Area | Evidence | Source |
| --- | --- | --- |
| Drive control | Four wheel-speed commands packed into an eight-byte extended CAN message | [August 8, 2025 drivetrain](https://github.com/UMRoboticsTeam/umrt-drivetrain-ros/blob/786c5a5812cd3dda781328987ac2d89a5a688483/hardware/diffbot_system.cpp) |
| Arm control | Named Project Perry controller, CAN stepper commands, differential wrist calculation, servo gripper | [Arm controller](https://github.com/UMRoboticsTeam/umrt-arm-ros-firmware/blob/022ad776c11b99c79ed5061d8feb1ff4520b5277/hardware/project_perry_controller.cpp) |
| Arm development | URDF/RViz, MoveIt 2 configuration, IKFast plugin | [August 8, 2025 configuration](https://github.com/UMRoboticsTeam/umrt-project-perry-config/blob/f705767f9e93f0f9c2343f287643d6930ca29d53/README.md) |
| Communications/runtime | 900 MHz control/sensor traffic, 2.4 GHz serial/PoE camera traffic, separate runtime services | [August 8, 2025 runtime README](https://github.com/UMRoboticsTeam/umrt-rover/blob/9d6410f9b260566bc3e3770a4df27a8ebba69687/README.md) |
| Servo development | ESP32 receives CAN angle commands and gradually positions a hobby servo | [August 3, 2025 firmware](https://github.com/UMRoboticsTeam/umrt-servo-controller/blob/3b122807fecd979ef75ab03bdf9958cbc3b307b6/README.md) |
| Science task context | Boneyard Salvage Assessment: equipment inspection, radiation/gas hazards, locations, and report | [Official 2025 brief](https://circ.cstag.ca/2025/tasks/#boneyard-salvage-assessment) |

The servo repository does not identify its actuator as the scoop. The underbody scoop history comes from the team's confirmation. Planning tools and configurations do not by themselves establish autonomous field operation.

Existing `IMG_7069.JPG` provides the close view of the arm gears, belt, gripper, and wiring. `IMG_3483.CR2.jpg` shows the chassis in the field without the main arm fitted.

## 2025–2026 — Prairie Panther

| Area | Evidence | Source |
| --- | --- | --- |
| Shared arm-software development | Joint trajectory controller and joint-state broadcaster with position/velocity interfaces | [July 12, 2026 controller configuration](https://github.com/UMRoboticsTeam/umrt-arm-ros-firmware/blob/6a68ef9a6754a76f6e8b812f2b36f5905306d44a/bringup/config/umrt_arm_controllers.yaml) |
| Electrical development | KiCad CAN-to-servo board, PIC18F25K83, two servo outputs, J1939-style commands | [February 9, 2026 board README](https://github.com/UMRoboticsTeam/umrt-can-ppm-gateway/blob/1f92df6fcdc03762687d6cf707ecb3192f1e1b27/README.md) |
| Science/embedded development | ESP32 RS485 soil sensor, MAX485, temperature/humidity/conductivity/pH, CRC16, extended CAN | [July 31, 2026 firmware](https://github.com/UMRoboticsTeam/umrt-soil-sensor-firmware/blob/a4ff2184ecd1e5b6e95ab640ce733dc17f5a1ee2/README.md) |
| Science task context | Exploration Proposal: site imagery, GPS/routes, soil samples, experiments, report | [Official 2026 brief](https://circ.cstag.ca/2026/tasks/#exploration-proposal) |

The repositories establish engineering development during the season, not deployment of every documented component on Prairie Panther. The arm controller configuration retains a Project Perry controller name, so its use is described as shared arm-software development. The rover runtime repository has no changes after August 2025; its radio frequencies are not copied into the 2026 entry as newly verified facts.

Existing `IMG_6441.jpg` documents the chassis/suspension and transparent equipment enclosure. `IMG_3936.JPG` shows the arm, gripper, and controller wiring; `IMG_3975.JPG` shows the mast arrangement. The visible arm controller is not captioned as a soil probe.

No clearly identifiable 2025/2026 underbody-scoop photo was found in the reviewed repository resources. Those views retain the explicitly labelled whole-rover overview rather than presenting another mechanism as a scoop. No mass, dimensions, battery ratings, arm payload capacity, or degree-of-freedom count is inferred from competition limits or photographs.

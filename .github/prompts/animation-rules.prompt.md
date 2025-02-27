---
description: Create beautiful ui animations across the whole project
globs: *.tsx
---

### 1. What makes an animation feel right
- **Natural Motion Feels Right**
  - Animations should mimic real-world physics to feel intuitive.
  - Linear animations feel robotic, while eased motions (e.g., ease-in-out) feel natural.
  - Apple’s iOS animations, like Dynamic Island, feel organic because they reflect natural motion.
- **Meaning & Purpose**
  - Animations should enhance understanding, not just look cool.
  - They should clearly link actions to consequences (e.g., transitioning a menu or expanding a card).
  - Overuse can make a UI feel sluggish or overwhelming.
- **Taste & Refinement**
  - Good motion design requires developing an eye for what “feels right.”
  - Taste improves with experience, just like design skills.
- **Web vs. Mobile Challenges**
  - Mobile interactions borrow from real-world gestures (e.g., swiping).
  - Web animations require an extra layer of abstraction (mouse, keyboard), making fluid interactions harder.
  - Thoughtful easing and spring physics can still create satisfying motion.
- **Balancing Performance & Delight**
  - Overly long animations (e.g., 1500ms for a theme switch) can frustrate users.
  - Smooth transitions should enhance usability, not hinder it.

### 2. Easing Blueprint:
- Ease-in: snappy! like modals
- Ease-in-out: moving elements in a new position
- Ease-out: sluggish, avoid
- Linear: generally avoid, robotic. exception: no interaction, like loading
- Ease: use for hover effects, transition

### 3. Springs
- work in progress

### 4. Timing and Purpose
- average human reaction time to change is 215ms (200-300 sweet spot)
- it takes 70ms to 700ms for eyes to move
- more sensitive to color change (shorter time between changes)
- 150ms for hover animations
- 200ms enter and 150ms exit for modals and popovers + easing/spring
- Generally larger animations require longer durations (heavier!)
- Purpose: give context or purely for delight
- carefully chosen, tasteful and elegant


Important:
- Animations inside @/components/animations/*.tsx should be viewed separately from the animation-rules and does not have to adhere to these rules.

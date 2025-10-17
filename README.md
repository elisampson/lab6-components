# lab6-components
**Comp 305, Fall 2025

## Overview
This project explores different component bases architectures. By building a chat interface four times each using its own unique approach. This lab shows the evolution from a static prototype to a fully interactive **Web Component**

## Project Goals
By the end of this lab, we will have:
1. A working static HTML and CSS prototype
2. AN interactive DOM Manipulation version
3. A Progressive Enhancement version
4. A fully encapsulated Web Component approach

## Design Details 
Each version follows the same layout and functionality besides the static approach
- **Header:** Blue top barh with chat title and approach label
- **Message Window:** Scrollable section for bot and user messages
- **Input Area:** Text box and send button at the bottom of the box

## Development Approach
The lab was completed through an incremental process:
1. Build the static layout with semantic HTML and CSS
2. Add interactivity using DOM manipulation
3. Enhance progressivley with custom element wrapping
4. Encapsulate logic and styles with the Shadow DOM
5. Consistent funcitonality and styling across all verions 

## Repository Structure
├── chat-prototype-html-css/ # Static prototype (HTML/CSS only)
├── chat-dom/ # DOM manipulation version
├── chat-webcomponent-pe/ # Progressive enhancement component
├── chat-webcomponent-gd/ # Fully encapsulated Shadow DOM component
├── eliza.js # Simple Eliza-style response logic
├── index.html # Main navigation page for all versions
└── README.md # Project documentation

## Design Dcisions
- Use of CSS Variables for consistent style

## License
This project is licensed under the **MIT License** — see [LICENSE.md](LICENSE.md) for details.

## Author 
**William Sampson**
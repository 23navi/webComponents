// es6 class

class ToolTip extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const toolTipIcon = document.createElement("span");
    toolTipIcon.textContent = "(?)";
    this.appendChild(toolTipIcon);
  }
}

customElements.define("navi-tool-tip", ToolTip);

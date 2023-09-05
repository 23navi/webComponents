// es6 class

class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._toolTipContainer;
  }
  connectedCallback() {
    const toolTipIcon = document.createElement("span");
    toolTipIcon.addEventListener("mouseenter", this._showToolTip);
    toolTipIcon.addEventListener("mouseleave", this._hideToolTip);
    toolTipIcon.textContent = "(?)";
    this.appendChild(toolTipIcon);
  }
  _showToolTip() {
    this._toolTipContainer = document.createElement("span");
    this._toolTipContainer.textContent = "This is a tool tip text";
    this.appendChild(this._toolTipContainer);
  }

  _hideToolTip() {
    this.removeChild(this._toolTipContainer);
  }
}

customElements.define("navi-tool-tip", ToolTip);

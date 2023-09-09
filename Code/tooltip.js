// es6 class

class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._toolTipContainer;
    this._toolTipText = "Some default value";
  }
  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._toolTipText = this.getAttribute("text");
    }
    const toolTipIcon = document.createElement("span");
    toolTipIcon.addEventListener("mouseenter", this._showToolTip.bind(this));
    toolTipIcon.addEventListener("mouseleave", this._hideToolTip.bind(this));
    toolTipIcon.textContent = "(?)";
    this.appendChild(toolTipIcon);
  }
  _showToolTip() {
    this._toolTipContainer = document.createElement("span");
    this._toolTipContainer.textContent = this._toolTipText;
    this.appendChild(this._toolTipContainer);
  }

  _hideToolTip() {
    this.removeChild(this._toolTipContainer);
  }
}

customElements.define("navi-tool-tip", ToolTip);

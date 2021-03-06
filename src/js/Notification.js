import classNames from "classnames";
import {formatCurrency} from "./utils";
export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }
  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }
  empty(){
  };
  render({type, price}) {
	  let dangerClass = classNames({
		'is-danger': Notification.types.HAWAIIAN === type
		  });

    const template = `
<div class="notification type-${type} ${dangerClass}">
  <button class="delete" onclick="((event) => event.target.parentNode.remove())(event)"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
  }
}

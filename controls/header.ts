
export function init(context, controlContext) {
    this.control = controlContext.control;
    controlContext.data = { Title: "@nodulus run demo web page" };
    return controlContext;
}
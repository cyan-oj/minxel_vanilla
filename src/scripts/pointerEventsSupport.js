const supportsPointerEvents = window.PointerEvent;
let errorPrompt = getElementById("errorprompt");
errorPrompt.textContent += (supportsPointerEvents ? "[Your Browser Supports PointerEvents]" : "[Your Browse Does Not support PointerEvents]");
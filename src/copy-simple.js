function copy(el) {
	var e = document.querySelector(el);
	
	function saveClipBoard(data) {
		var dummy = document.createElement('input');
		var text = data;

		document.body.appendChild(dummy);
		dummy.value = text;
		dummy.select();
		var success = document.execCommand('copy');
		document.body.removeChild(dummy);
		
		return success;
	}
	function val() {
		var v = e.value
		return saveClipBoard(v)
	}
	
	function text() {
		var t = e.innerText
		
		return saveClipBoard(t)
	}
	
	function html() {
		var h = e.outerHTML
		
		return saveClipBoard(h)
	}
  
    function url() {
        var u = window.location.href
        
        return saveClipBoard(u)
    }
	
	function selected() {
		var s = window.getSelection().toString()
		
		return saveClipBoard(s)
	}
	
	return {
		val: val,
        text: text,
        html: html,
        url: url,
		selected: selected
	}
}

module.exports = copy
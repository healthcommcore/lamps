/* 
This script is an example of a JavaScript plugin .
JavaScript plugins can be used to make any JavaScript API calls.
Some of the most useful API calls are shown in this example.

Loading this plugin:
From PHP:
$editor = new wysiwygPro();
$editor->addJSPlugin('EXAMPLE', 'plugin_src.js');
$editor->display();

From JavaScript:
(make sure this script is included first using a script tag)
WPro.editors["editorName"].loadPlugin('EXAMPLE');

Referencing this plugin using JavaScript:
WPro.editors["editorName"].plugins["EXAMPLE"]


The class name is always wproPlugin_ followed by the name of the plugin.

*/
function wproPlugin_EXAMPLE () {
	/* The init function is called when the plugin is loaded. it is passed a reference to the editor object. */
	this.init = function (editor) {
		
		// you sould never store the editor object in your plugin, but you can store the name of the editor instead:
		this.editorName = editor.name;
		
		/*
		HTML Filter Examples:
		You can assign HTML filters to change the HTML source code generated by the editor
		The filter functions are passed the html source string and should return the source code with any modifications made.
		The filter functions are also passed a reference to the editor object.
		*/
		// Preview filters are called when generating a preview, they do not affect the actual source code in the editor.		
		editor.addHTMLFilter('preview', function (editor, html) {
			return html.replace(/<p>/gi, '<p>PREVIEW FILTER, ');
		});
		// Design filters are called only when generating the design view.
		editor.addHTMLFilter('design', function (editor, html) {
			return html.replace(/<p>/gi, '<p>DESIGN FILTER, ');
		});
		// Source filters are called anytime source code is generated.
		editor.addHTMLFilter('source', function (editor, html) {
			return html.replace(/<p>/gi, '<p>SOURCE FILTER, ');
		});
		// Submit filters are only called when the form containing the editor is submitted.
		editor.addHTMLFilter('submit', function (editor, html) {
			return html.replace(/<p>/gi, '<p>SUBMIT FILTER, ');
		});
		
		/* 
		Editor Event examples: 
		You can assign functions that should be called when certain events occur within the editor
		The functions are passed a reference to the editor object.
		*/
		// the init event fires when the editor is being created.
		editor.addEditorEvent('init', function (editor) {
			alert('init event called');
		});
		// the load event fires when the editor has finsihed loading and is ready to use.
		editor.addEditorEvent('load', function (editor) {
			alert('load event called');
		});
		// the enterdesign event fires when the user switches to design view
		editor.addEditorEvent('enterdesign', function (editor) {
			alert('enterdesign event called');
		});
		// the entersource event fires when the user switches to source view
		editor.addEditorEvent('entersource', function (editor) {
			alert('entersource event called');
		});
		// the enterpreview event fires when the user switches to preview view
		editor.addEditorEvent('enterpreview',function (editor) {
			alert('enterpreview event called');
		});
		// the submit event fires when the form containing the editor is submitted.
		editor.addEditorEvent('submit', function (editor) {
			alert('submit event called');
		});
		
		/* 
		There are many more API calls available, please see
		http://www.wysiwygpro.com/index.php?id=235
		*/
	}
	
	/* we can add methods to the plugin that could be called by custom buttons */
	this.exButton3Clicked = function() {
		WPro.editors[this.editorName].insertAtSelection('<b>Example button 3 was clicked</b>');
	}
	
}
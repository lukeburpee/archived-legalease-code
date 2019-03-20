/**
 * This shouldn't be showing up here, but I can't see to get this documentation system to ignore this file,
 * so just ignore it.
 *
 * This element is used internally to render the dialog boxes when `<paper-datatable-column>` is used with the
 * `[dialog]` attribute.
 */

Polymer({

  is: 'paper-datatable-edit-dialog',

  properties: {
    positionedRelativeTo: {
      type: Element,
      observer: 'setLocationRelativeTo'
    },
    visible: {
      type: Boolean,
      reflectToAttribute: true
    }
  },

  behaviors: [
    Polymer.IronResizableBehavior
  ],

  listeners: {
    'iron-resize': 'setLocationRelativeTo'
  },

  ready: function(){
    this.addEventListener('keyup', function(ev){
      var genericEvent = Polymer.dom(ev);
      if(ev.keyCode == 13 && genericEvent.path[0].nodeName.toLowerCase() !== 'textarea'){
        this.dismiss();
      }
    }.bind(this));
    document.body.addEventListener('click', function(ev){
      var path = Polymer.dom(ev).path;
      if(this.positionedRelativeTo && path.indexOf(this) == -1 && path.indexOf(this.positionedRelativeTo) == -1){
        this.dismiss(ev);
      }
    }.bind(this));
  },

  dismiss: function(ev){
    this.set('visible', undefined);
    this.positionedRelativeTo = undefined;
    if(ev)
      ev.preventDefault();
  },

  findFocus: function() {
    var paperInput = Polymer.dom(this).querySelector('paper-input')
    if (paperInput) {
      paperInput.$.input.focus();
    }
    var paperInput = Polymer.dom(this).querySelector('paper-textarea')
    if (paperInput) {
      var position = paperInput.$.input.$.textarea.value.length;
      paperInput.$.input.$.textarea.focus();
      paperInput.$.input.$.textarea.setSelectionRange(position, position);
    }
    var input = Polymer.dom(this).querySelector('input')
    if (input) {
      input.focus();
    }
  },

  setLocationRelativeTo: function(){
    if(this.positionedRelativeTo) {
      this.set('visible', true)
      this.revealTime = Date.now();
      var relativeToParent = this.parentNode;
      while (relativeToParent !== window) {
        if (relativeToParent.nodeName == '#document-fragment') {
          relativeToParent = relativeToParent.host;
        } else {
          if (getComputedStyle(relativeToParent).position == 'relative' || getComputedStyle(relativeToParent).position == 'absolute') {
            break;
          }
          relativeToParent = Polymer.dom(relativeToParent).parentNode;
        }
      }
      var parent = relativeToParent.getBoundingClientRect();
      var child = this.positionedRelativeTo.getBoundingClientRect();
      this.style.top = child.top - 2 - parent.top + "px";
      this.style.left = child.left - parent.left + "px";
      this.style.right = Math.max(parent.right - child.right, 0) + "px";
      this.$.material.style.minHeight = child.height + 2 + "px";
    }
  }



});

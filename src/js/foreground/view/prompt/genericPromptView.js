﻿define([
    'text!template/genericPrompt.html'
], function (GenericPromptTemplate) {
    'use strict';

    var GenericPromptView = Backbone.Marionette.ItemView.extend({
        className: 'prompt fixed-full-overlay',
        template: _.template(GenericPromptTemplate),

        events: {
            'click': '_hideIfClickOutsidePanel',
            'click .remove': 'hide',
            'click @ui.okButton': '_doRenderedOk',
            'keydown .submittable': '_doRenderedOkOnEnter'
        },
        
        ui: {
            panel: '.panel',
            content: '.content',
            okButton: 'button.ok'
        },
        
        initialize: function (options) {
            if (_.isUndefined(options) || _.isUndefined(options.containerHeight)) throw new Error('GenericPromptView expects to be initialized with a containerHeight');

            this.$el.addClass(this.model.get('view').className + '-prompt');
        },
        
        onRender: function () {
            //  Add specific content to the generic dialog's interior
            this.ui.content.append(this.model.get('view').render().el);
        },

        onShow: function () {
            //  TODO: I think the region should be in charge of this
            //  Store original values in data attribute to be able to revert without magic numbers.
            this.$el.data('background', this.$el.css('background')).transition({
                'background': 'rgba(0, 0, 0, 0.5)'
            }, 'snap');

            //  Calculate center for prompt by finding the average difference between prompts height and its container
            //  IMPORTANT: Math.floor is necessary to prevent sub-pixel calculations which result in blur.
            var yTranslateCenter = Math.floor((this.options.containerHeight - this.ui.panel.height()) / 2);

            this.ui.panel.transition({
                y: yTranslateCenter,
                opacity: 1
            }, 'snap');

            //  Be sure to tell the child view it has been shown!
            this.model.get('view').triggerMethod('show');
        },
        
        //  Unless a prompt specifically implements a reminder it is assumed that the reminder is not disabled and the prompt should always be shown when asked.
        reminderDisabled: function() {
            return false;
        },
        
        hide: function() {
            this.$el.transition({
                'background': this.$el.data('background')
            }, function () {
                var contentView = this.model.get('view');
                if (_.isFunction(contentView._doOnHide)) {
                    contentView._doOnHide();
                }

                this.destroy();
            }.bind(this));

            this.ui.panel.transition({
                y: 0,
                opacity: 0
            });
        },
        
        //  If the user clicks the 'dark' area outside the panel -- hide the panel.
        _hideIfClickOutsidePanel: function (event) {
            if (event.target == event.currentTarget) {
                this.hide();
            }
        },
        
        //  If the enter key is pressed on a submittable element, treat as if user pressed OK button.
        _doRenderedOkOnEnter: function(event) {
            if (event.which === 13) {
                this._doRenderedOk();
            }
        },
        
        _doRenderedOk: function () {
            //  Run validation logic if provided else assume valid
            var contentView = this.model.get('view');
            var isValid = _.isFunction(contentView.validate) ? contentView.validate() : true;
            
            if (isValid) {
                if (_.isFunction(contentView._doRenderedOk)) {
                    contentView._doRenderedOk();
                }

                this.hide();
            }
        }
    });

    return GenericPromptView;
});
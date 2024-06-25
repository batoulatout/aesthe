!function(){"use strict";var e,t={294:function(){var e=GLSR.addons["site-reviews-forms"];function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function i(e){var i=function(e,i){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,i||"default");if("object"!==t(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(e,"string");return"symbol"===t(i)?i:String(i)}function n(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return!(_.isNull(e)||_.isUndefined(e)||_.isString(e)&&""===jQuery.trim(e)||_.isArray(e)&&_.isEmpty(e))},o={between:function(t,i,n,o){if(s(t)&&(!jQuery.isNumeric(t)||+t<o[0]||+t>o[1]))return wp.i18n.sprintf(e.messages.between,e.labels[i],o[0],o[1])},criteria:function(t,i,n){var s=(t||"").split("|");if("always"!==s[0]&&1===s.length)return wp.i18n.sprintf(e.messages.criteria,e.labels[i])},number:function(t,i,n){if(s(t)&&!jQuery.isNumeric(t))return wp.i18n.sprintf(e.messages.number,e.labels[i])},required:function(t,i,n){if(!s(t))return wp.i18n.sprintf(e.messages.required,e.labels[i])},reserved:function(t,i,n){var s=n.get("type")||"",o=e["reserved_".concat(i,"s")]||[];return"review_"!==s.substring(0,7)&&~o.indexOf(t)||"name"===i&&~["_custom","custom_"].indexOf(t.substring(0,7))?wp.i18n.sprintf(e.messages.reserved,t):void 0},slug:function(t,i,n){if(new RegExp("[^a-z_]").test(t))return wp.i18n.sprintf(e.messages.slug,e.labels[i])},unique:function(t,i,o){var r=_.filter(o.collection.where(n({},i,t)),(function(e){return e.cid!==o.cid}));if(s(t)&&r.length)return wp.i18n.sprintf(e.messages.unique,e.labels[i])}},r=Backbone.Model.extend({defaults:{conditions:"always",description:"",expanded:!1,format:"",format_link_text:"",handle:"",hidden:!1,label:"",maxlength:0,minlength:0,name:"",options:{},placeholder:"",required:!1,tag:"",tag_label:"",type:"text",value:""},errors:{},initialize:function(){this.set("handle",this.getDefaults().handle,{silent:!0})},getDefaults:function(t){t=t||this.get("type");var i=_.findWhere(e.defaults,{type:t})||{};return _.extend({},_.clone(this.defaults),i)},options:function(){var t=e.options[this.get("type")]||{};return this.get("hidden")&&(t=_.filter(t,(function(e){return"hidden"===e.substring(0,6)})),t=_.map(t,(function(e){return e.replace("hidden:","")}))),this.get("format")&&"link"!==this.get("format").substring(0,4)&&(t=_.filter(t,(function(e){return"format_link_text"!==e}))),t},reset:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=e||this.get("type");var i=this.get("hidden");this.clear({silent:!0});var n=_.extend({},this.getDefaults(e),{hidden:!!i});return this.set(n,{silent:!0,validate:t}),this},toggle:function(e){return this.set({expanded:e||!this.get("expanded")},{silent:!0,validate:!1}),this},validate:function(t){var i=this;this.errors={};var n=_.union(this.options(),["name","type"]),s=_.pick(e.validation[t.type],n);if(_.each(s,(function(e,n){_.each(e,(function(e,s){var r=o[s](t[n],n,i,e);r&&(i.errors[n]=r)}))})),!_.isEmpty(this.errors))return console.error(this.errors),!1}}),l=r,a=Backbone.Collection.extend({model:l}),d={classes:{active:"is-active",condition_add:"glsr-add-condition",condition_remove:"glsr-remove-condition",conditions:"glsr-criteria-conditions",criteria:"glsr-criteria",error:"glsrf-field-error",field_inner:"glsrf-field-inner",highlighted:"is-highlighted",input:"glsr-input",invalid:"is-invalid",mb:"glsr-search-multibox",mb_entries:"glsr-selected-entries",mb_entry:"glsr-multibox-entry",mb_input:"glsr-search-input",mb_remove:"glsr-remove-button",mb_result:"glsr-search-result",mb_results:"glsr-search-results",selected:"is-selected",settings:"glsrf-field-settings"},contains:function(e,t){return e.classList.contains(this.classes[t]||t)},encode:function(e){return JSON.stringify(e)},escapeHtml:function(e){return e.replace(/[&<>'"]/g,(function(e){return"&#"+e.charCodeAt(0)+";"}))},selector:function(e){return"."+this.classes[e]||0}},c=function(e){if(window.getSelection){var t=window.getSelection(),i=document.createRange();i.selectNodeContents(e),t.removeAllRanges(),t.addRange(i)}};function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var f=Backbone.View.extend({className:"glsr-criteria-condition",field:null,fields:null,template:wp.template("glsrf-criteria-condition"),events:{"change select[data-condition=field]":"onChangeField","change select[data-condition=operator]":"onChange","change select[data-condition=value]":"onChange","keyup input[data-condition=value]":"onChange","click .glsr-remove-condition":"onRemove"},initialize:function(e){_.extend(this,_.pick(e,"field","fields")),this.listenTo(this.model,"destroy",this.remove),this.listenTo(this.model,"change:name",this.render)},render:function(){return this.$el.html(this.template(this.data())),this},conditionFields:function(){return _.object(this.fields.filter(function(t){if(t.get("name")===this.field.get("name"))return!1;var i=_.get(e.criteria.restrictions,t.get("type"),{});return!_.isEmpty(_.values(i).filter((function(e){return!_.isEmpty(e)})))}.bind(this)).map((function(e){return[e.get("name"),e.get("label")||e.get("handle")]})))},conditionOperators:function(){var t=_.get(e.criteria.restrictions,this.fieldKey("type"),{});return _.pick(e.criteria.operators,t.operators||[])},conditionValues:function(){var t=_.get(e.criteria.restrictions,this.fieldKey("type"),{});return _.pick(e.criteria.values,t.values||[])},data:function(){var e,t,i=this.model.toJSON(),n=this.conditionFields(),s=this.conditionOperators(),o=this.conditionValues(),r=this.model.previous("name");!_.isUndefined(r)&&i.name!==r&&this.fields.findWhere({name:r})&&(i.operator=null!==(e=_.keys(s).shift())&&void 0!==e?e:"",i.value=null!==(t=_.keys(o).shift())&&void 0!==t?t:"");return this.model.set(i,{silent:!0}),u(u({},i),{},{fields:n,operators:s,values:o})},fieldKey:function(e){return this.fields.findWhere({name:this.model.get("name")}).get(e)},onChange:function(e){var t=e.target.dataset.condition,i=e.target.value;this.model.set(t,i)},onChangeField:function(e){this.onChange(e)},onRemove:function(e){e.preventDefault(),this.model.destroy()}}),p=Backbone.Model.extend({defaults:{name:"",operator:"",value:""}}),g={Model:p,Collection:Backbone.Collection.extend({model:p}),View:f},m=Backbone.View.extend({conditions:null,key:null,selected:"",template:wp.template("glsrf-criteria"),events:{"change .glsr-criteria-option select":"onChangeCriteria","click .glsr-add-condition":"onAddCondition"},initialize:function(e){var t=this;_.extend(this,_.pick(e,"key")),this.conditions=new g.Collection,this.render(),this.listenTo(this.conditions,"add",this.update),this.listenTo(this.conditions,"change",this.update),this.listenTo(this.conditions,"remove",this.update),this.listenTo(this.model.collection,"field:save",this.onFieldSave),this.listenTo(this.model.collection,"remove",this.onFieldRemove),this.listenTo(this.model,"destroy",(function(){t.conditions.reset(),t.remove()}))},render:function(){var t=this;this.selected=this.model.get(this.key).split("|").shift()||"always";var i={cid:this.model.cid,conditions:e.criteria.conditions,key:this.key,selected:this.selected};if(this.$el.html(this.template(i)),"always"===this.selected)this.$(d.selector("condition_add")).hide();else{var n=this.model.get(this.key).split("|");n.shift(),_.map(n,(function(e){var i=_.object(["name","operator","value"],e.split(":"));t.addCondition(i)}))}return this},addCondition:function(t){var i=this;if(!(2>this.model.collection.length)){if(_.isEmpty(t)){var n=this.model.collection.filter((function(e){return e.get("name")!==i.model.get("name")})).shift(),s=_.get(e.criteria.restrictions,n.get("type"),[]),o=_.keys(_.pick(e.criteria.operators,s.operators)).shift();t={name:n.get("name"),operator:o}}var r=new g.Model(t),l=new g.View({field:this.model,fields:this.model.collection,model:r});this.$(d.selector("conditions")).append(l.render().el),this.conditions.add(r)}},onAddCondition:function(e){e.preventDefault(),this.addCondition()},onChangeCriteria:function(e){this.selected=e.target.value;var t="always"===this.selected?"hide":"show",i=this.$(d.selector("conditions"));this.$(d.selector("condition_add"))[t](),i[t](),"show"!==t||i.children().length?this.update():this.addCondition()},onFieldRemove:function(e){this.conditions.length&&(this.conditions.where({name:e.get("name")}).forEach((function(e){return e.destroy()})),this.conditions.length||this.$(".glsr-criteria-option select").val("always").trigger("change"))},onFieldSave:function(e){if(this.conditions.length){var t=e.previous("name"),i=e.get("name");t!==i&&this.conditions.where({name:t}).forEach((function(e){return e.set({name:i})}))}},update:function(){var e=[this.selected];"always"===this.selected&&this.conditions.reset(),this.conditions.each((function(t){var i=t.toJSON();e.push(i.name+":"+i.operator+":"+i.value)})),this.model.set(this.key,e.join("|"),{silent:!0,validate:!0}),this.model.trigger("model:validate:reset",this.el)}}),v=m,y=["Down","Enter","Esc","Up"],b=["Tab"],w=Backbone.View.extend({isActive:!1,key:null,options:[],template:wp.template("glsrf-multibox"),templateEntry:wp.template("glsrf-multibox-entry"),events:{"focus .glsr-search-input":"onFocusInside","input .glsr-search-input":"onSearch","click .glsr-remove-button":"onRemove","click .glsr-search-result":"onSelect","mouseleave .glsr-search-result":"onMouseleave","mouseover .glsr-search-result":"onMouseover"},initialize:function(e){_.extend(this,_.pick(e,"key","options")),this.render(),this.listenTo(this.model,"multibox:keydown",this.onKeydown),this.listenTo(this.model,"multibox:keyup",this.onKeyup),this.listenTo(this.model,"destroy",this.remove),this.listenTo(this.model.collection,"doc:click",this.onClickOutside)},render:function(){this.$el.html(this.template({cid:this.model.cid,key:this.key,options:this.options})),this.refreshDOM()},filterEntries:function(){var e=this,t=this.model.get(this.key)||[],i=this.$(d.selector("mb_input")).val();this.$(d.selector("mb_result")).each((function(n,s){var o=e.$(s),r=~t.indexOf(o.data("slug")),l=-1===o.text().toLowerCase().indexOf(i.toLowerCase());o[r||l?"hide":"show"]()}))},keydownDown:function(e){(d.contains(e.target,"mb_input")||d.contains(e.target,"mb_result"))&&(e.preventDefault(),this.navigateDown())},keydownEnter:function(e){var t=this.$(e.target);if(t.length)if(t.hasClass(d.classes.mb_remove))this.removeSelected(t);else{var i=this.$(d.selector("mb_result")+d.selector("highlighted"));this.selectOption(i)}},keydownEsc:function(e){this.multiboxClose()},keydownUp:function(e){(d.contains(e.target,"mb_input")||d.contains(e.target,"mb_result"))&&(e.preventDefault(),this.navigateUp())},keyupTab:function(e){d.contains(e.target,"mb_input")?this.multiboxOpen():this.multiboxClose()},moveIntoView:function(){var e=this.$(d.selector("mb_result")).filter(d.selector("highlighted"));if(e.length){var t=e.parent(),i=t.scrollTop(),n=i+t.outerHeight(),s=e.get(0).offsetTop,o=s+e.outerHeight();s<i?t.scrollTop(s-4):o>n&&t.scrollTop(o-t.outerHeight())}},multiboxClose:function(){this.removeHighlighted(),this.$(d.selector("mb_results")).removeClass(d.classes.active),this.$(d.selector("mb_input")).val("").blur(),this.isActive=!1},multiboxOpen:function(){var e=this.$(d.selector("mb_results"));e.length&&(e.hasClass(d.classes.active)||(this.removeHighlighted(),this.refreshDOM(),e.addClass(d.classes.active).scrollTop(0)),this.isActive=!0)},navigate:function(e){var t=this.$(d.selector("mb_result")+":not(:hidden)"),i=t.index(this.$(d.selector("highlighted"))),n=Math.min(i+e,t.length-1);t.removeClass(d.classes.highlighted),0>n?this.$(d.selector("mb_input")).focus():(t.eq(n).addClass(d.classes.highlighted),this.moveIntoView())},navigateDown:function(){this.multiboxOpen(),this.navigate(1)},navigateNext:function(){this.$(d.selector("highlighted")).nextUntil(":hidden").length?this.navigateDown():this.navigateUp()},navigateUp:function(){this.multiboxOpen(),this.navigate(-1)},onClickOutside:function(e){if(this.isActive){var t=this.$(e.target);t.length&&t.closest(d.selector("mb")).length||this.multiboxClose()}},onFocusInside:function(e){this.multiboxOpen()},onKeydown:function(e){var t,i=e.key.replace(/Arrow|ape/g,"");~y.indexOf(i)&&(e.stopPropagation(),null===(t=this["keydown"+i])||void 0===t||t.call(this,e))},onKeyup:function(e){var t,i=e.key.replace(/Arrow|ape/g,"");~b.indexOf(i)&&(e.stopPropagation(),null===(t=this["keyup"+i])||void 0===t||t.call(this,e))},onMouseleave:function(e){this.$(e.currentTarget).removeClass(d.classes.highlighted)},onMouseover:function(e){this.removeHighlighted(),this.$(e.currentTarget).addClass(d.classes.highlighted)},onRemove:function(e){this.removeSelected(jQuery(e.currentTarget))},onSearch:function(e){var t=this;_.debounce((function(){t.removeHighlighted(),t.refreshDOM()}),100)()},onSelect:function(e){this.selectOption(jQuery(e.currentTarget))},refreshDOM:function(){this.renderEntries(),this.filterEntries()},removeHighlighted:function(){this.$(d.selector("mb_result")).removeClass(d.classes.highlighted)},removeSelected:function(e){var t=this,i=e.data("slug");if(i){var n=_.without(this.model.get(this.key)||[],i);this.model.set(this.key,n,{silent:!0}),e.closest(d.selector("mb_entry")).css({backgroundColor:"#F1ADAD"}).fadeOut(350,(function(){t.removeHighlighted(),t.refreshDOM(),t.$(d.selector("mb_input")).focus()}))}},renderEntries:function(){var e=this,t=this.model.get(this.key)||[],i=this.$(d.selector("mb_entries"));i.html(""),_.each(t,(function(t){var n=_.findWhere(e.options,{slug:t});i.append(e.templateEntry(n||{name:t,slug:t}))}))},selectOption:function(e){var t=e.data("slug");if(t){var i=this.model.get(this.key)||[];i.push(t),i=_.uniq(i).sort(),this.model.set(this.key,i,{silent:!0,validate:!0}),this.model.trigger("model:validate:reset",e),this.navigateNext(),this.refreshDOM(),this.$(d.selector("mb_input")).val("").focus()}}}),x={},k=Backbone.View.extend({className:"glsrf-field",criteria:["conditions"],multibox:["roles","terms","users","posttypes"],template:wp.template("glsrf-field"),templates:{general:{type:"glsrf-field-type",name:"glsrf-field-name",options:"glsrf-field-options",value:"glsrf-field-value",tag:"glsrf-field-tag",roles:"glsrf-field-roles",terms:"glsrf-field-terms",users:"glsrf-field-users",posttypes:"glsrf-field-posttypes",hidden:"glsrf-field-hidden"},presentation:{label:"glsrf-field-label",placeholder:"glsrf-field-placeholder",description:"glsrf-field-description",tag_label:"glsrf-field-tag_label",format:"glsrf-field-format",format_link_text:"glsrf-field-format_link_text"},validation:{minlength:"glsrf-field-minlength",maxlength:"glsrf-field-maxlength",required:"glsrf-field-required"},conditions:{conditions:"glsrf-field-conditions"}},events:{"change input[type=checkbox]":"onChange","change input[type=number]":"onChange","change select":"onChange","click .template-tag":"onSelectFieldTag","click a.remove-field":"onRemoveField","click a.toggle-field":"onToggleField","click button.save-field":"onSaveField","click button[data-panel]":"onSwitchPanel",keydown:"onViewKeydown","keyup input":"onChange","keyup textarea":"onChange",keyup:"onViewKeyup"},initialize:function(){this.$el.attr("data-model-cid",this.model.cid),this.templates=wp.hooks.applyFilters("site-reviews-forms.templates",this.templates),this.listenTo(this.model,"change",this.refresh),this.listenTo(this.model,"change:hidden",this.changeHidden),this.listenTo(this.model,"change:type",this.changeType),this.listenTo(this.model,"destroy",this.remove),this.listenTo(this.model,"field:collapse",this.collapseField),this.listenTo(this.model,"field:expand",this.expandField),this.listenTo(this.model,"model:validate:reset",this.resetValidation)},render:function(){var t=this,i=this.$('button[data-panel][aria-selected="true"]').data("panel");this.$el.html(this.template(this.model.toJSON()));var n=this.$(d.selector("settings")),s=this.model.options();return _.each(this.templates,(function(i,o){var r=jQuery('<div data-panel="'.concat(o,'"/>'));n.append(r),_.each(i,(function(i,n){if(-1!==_.indexOf(s,n)){var o=_.clone(t.model.toJSON());o.formats=e.formats[o.type],o.options=function(e){var t=[];return _.map(e,(function(e,i){""===i||i===e?t.push(e):t.push(i+" : "+e)})),t.join("\n")}(o.options),r.append(wp.template(i)(o)),-1!==_.indexOf(t.multibox,n)&&t.loadMultibox(n),-1!==_.indexOf(t.criteria,n)&&t.loadCriteria(n)}}))})),n.append(wp.template("glsrf-field-save")),GLSR.autosize(this.$("textarea")),this.switchPanel(i),this},changeHidden:function(e){this.$el.removeClass(d.classes.invalid),e.reset()},changeType:function(e,t){this.$el.removeClass(d.classes.invalid),e.reset(t)},collapseField:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.model.toggle(!1),this.$(d.selector("field_inner")).slideUp(200,(function(){t&&e.validate()}))},expandField:function(){var e=this;this.model.toggle(!0),this.switchPanel("general"),this.$(d.selector("field_inner")).slideDown(200,(function(){GLSR.autosize.update(e.$("textarea"))}))},loadCriteria:function(e){var t=this.$(d.selector("criteria")),i=new v({el:t,key:e,model:this.model});_.isUndefined(window.x)&&(window.x=[]),window.x.push(i)},loadMultibox:function(e){var t=this,i=this.$(d.selector("mb"));x[e]?new w({el:i,options:x[e],key:e,model:this.model}):wp.apiFetch({path:"/site-reviews/v1/forms/".concat(e)}).then((function(n){x[e]=n,new w({el:i,options:n,key:e,model:t.model})}))},onChange:function(e){if(!~["ArrowDown","ArrowUp","Tab"].indexOf(e.key)){var t=e.currentTarget,i=t.dataset.field,n={validate:!0};if(!_.isEmpty(i)){var s=~["checkbox","radio"].indexOf(t.type)?t.checked:t.value;~["hidden","format","type"].indexOf(i)||(n.silent=!0),~["description","label"].indexOf(i)||(s=jQuery("<div/>").html(s).text()),"options"===i&&(s=function(e){var t=e.split("\n"),i={};return _.map(t,(function(e){(e=e.split(":"))[1]=e[1]||e[0],i[jQuery.trim(e[0])]=jQuery.trim(e[1])})),i}(s)),this.resetValidation(t),this.model.set(i,s,n)}}},onRemoveField:function(e){e.preventDefault(),this.model.destroy()},onSaveField:function(e){this.validate()&&(this.model.trigger("field:save",this.model),this.render(),this.model.trigger("data:refresh"),this.collapseField(!1))},onSelectFieldTag:function(e){c(e.currentTarget)},onSwitchPanel:function(e){e.preventDefault(),this.switchPanel(e.currentTarget.dataset.panel)},onToggleField:function(e){e.preventDefault(),this.model.get("expanded")?this.collapseField():this.expandField()},onViewKeydown:function(e){"Enter"===e.key&&"TEXTAREA"!==e.target.nodeName&&e.preventDefault(),this.model.trigger("multibox:keydown",e)},onViewKeyup:function(e){this.model.trigger("multibox:keyup",e)},refresh:function(){this.model.toggle(!0),this.render()},resetValidation:function(e){var t=this.$(e).closest(".glsr-metabox-field");t.find(d.selector("invalid")).removeClass(d.classes.invalid),t.find(d.selector("error")).remove()},switchPanel:function(e){var t=this;"field:switchPanel[".concat(e=e||"general","]"),this.$("button[data-panel]").each((function(i,n){n.dataset.panel===e?(t.$(n).attr("aria-selected","true"),t.$(n).attr("tabindex",-1)):(t.$(n).attr("aria-selected","false"),t.$(n).removeAttr("tabindex"))})),this.$("div[data-panel]").each((function(i,n){t.$(n)[n.dataset.panel===e?"show":"hide"](),n.childElementCount||t.$('button[data-panel="'.concat(n.dataset.panel,'"]')).hide()})),GLSR.autosize.update(this.$("textarea"))},validate:function(){var e,t=this;return _.isEmpty(this.model.errors)?(this.$el.removeClass(d.classes.invalid),!0):(this.$el.addClass(d.classes.invalid),_.each(this.model.errors,(function(i,n){var s=t.$('[data-field="'.concat(n,'"]'));e||(e=s.closest("[data-panel]").data("panel")),t.resetValidation(s),s.addClass(d.classes.invalid).closest(d.selector("input")).append(wp.template("glsrf-field-error")({error:i}))})),e&&this.switchPanel(e),!1)}}),O={Collection:a,Model:l,View:k},C=Backbone.View.extend({el:"#glsrf-metabox-fields",fields:null,sortable:null,tippy:[],events:{"click button.add-field":"createField","click button.collapse-all":"collapseFields","click button.expand-all":"expandFields"},initialize:function(){var e=this;this.fields=new O.Collection,this.listenTo(this.fields,"add",this.addField),this.listenTo(this.fields,"data:refresh",this.refresh),this.listenTo(this.fields,"update",this.refresh),this.listenTo(this.fields,"reset",this.addFields),jQuery(document).on("click",(function(t){return e.fields.trigger("doc:click",t)})),this.render()},render:function(){try{this.fields.add(JSON.parse(this.$("#glsrf-data").val()))}catch(e){console.error(e)}return this},addField:function(e){var t=new O.View({model:e});this.$(".glsrf-fields").append(t.render().el)},addFields:function(){this.$(".glsrf-fields").html(""),this.fields.each(this.addField,this)},collapseFields:function(e){e.currentTarget.blur(),this.fields.each((function(e){return e.trigger("field:collapse")}))},createField:function(e){e.preventDefault();var t=new O.Model;this.fields.each((function(e){return e.trigger("field:collapse")})),this.fields.add(t.reset(null,!1)),t.trigger("field:expand")},expandFields:function(e){e.currentTarget.blur(),this.fields.each((function(e){return e.trigger("field:expand")}))},refresh:function(e){this.toggleWelcome(),this.refreshData(),this.sortableUi(),this.tippyJs()},refreshData:function(){var e=[];this.fields.each((function(t){t.isValid(),_.isEmpty(t.errors)?e.push(t.toJSON()):console.error(t.errors)})),this.$("#glsrf-data").val(JSON.stringify(e))},sortableUi:function(){null===this.sortable?this.sortable=this.$(".glsrf-fields").sortable({delay:150,items:".glsrf-field",handle:".glsrf-field-handle .sortable-drag",tolerance:"pointer",scroll:!1,start:function(e,t){t.item[0].classList.add("glsrf-disable"),t.placeholder.outerHeight(t.item.outerHeight())},stop:this.sortFields.bind(this)}):this.sortable.sortable("refresh")},sortFields:function(){var e=this;this.$(".glsrf-fields").children().each((function(t,i){var n=jQuery(i).attr("data-model-cid"),s=e.fields.get(n);s&&(e.fields.remove(s,{silent:!0}),e.fields.add(s,{silent:!0,sort:!e.fields.comparator})),i.classList.remove("glsrf-disable")})),this.refreshData()},tippyJs:function(){_.each(this.tippy,(function(e){return e.destroy()})),this.tippy=GLSR.Tippy.tippy("[data-tippy-content]",{delay:[200,null],followCursor:"horizontal",offset:[-50,10],placement:"top-start",plugins:[GLSR.Tippy.plugins.followCursor]})},toggleWelcome:function(){this.$(".glsrf-actions > div")[this.fields.length?"show":"hide"](),this.$(".glsrf-no-fields")[this.fields.length?"hide":"show"]()}});jQuery((function(e){var t=e("textarea.glsrf-template");t.length&&(wp.codeEditor.initialize(t,cm_settings),new C),e(document).on("postbox-toggled",(function(){e(".CodeMirror").each((function(e,t){return t.CodeMirror.refresh()}))})),e("code[data-select-text]").on("click",(function(e){return c(e.currentTarget)}));e("select#site-reviews-form").on("change",(function t(i){var s=i.target,o=s.closest(".inside"),r=s.value,l=function(e,t){return n({},GLSR.nameprefix,jQuery.extend({_action:e,_nonce:GLSR.nonce[e]},t))}("metabox-details",{form_id:r,post_id:e("#post_ID").val()});wp.ajax.post(GLSR.action,l).done((function(i){GLSR.stars.destroy(),e(o).find(".glsr-metabox-field:not([data-toggle])").remove(),e(o).append(i.items),e(o).find("#site-reviews-form").val(r),e(o).find("#site-reviews-form").on("change",t),GLSR.stars.rebuild()}))}))}))},115:function(){},889:function(){},142:function(){}},i={};function n(e){var s=i[e];if(void 0!==s)return s.exports;var o=i[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,i,s,o){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],o=e[c][2];for(var l=!0,a=0;a<i.length;a++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(l=!1,o<r&&(r=o));if(l){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,s,o]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={110:0,613:0,271:0,494:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,o,r=i[0],l=i[1],a=i[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(a)var c=a(n)}for(t&&t(i);d<r.length;d++)o=r[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},i=self.webpackChunk=self.webpackChunk||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}(),n.O(void 0,[613,271,494],(function(){return n(294)})),n.O(void 0,[613,271,494],(function(){return n(115)})),n.O(void 0,[613,271,494],(function(){return n(889)}));var s=n.O(void 0,[613,271,494],(function(){return n(142)}));s=n.O(s)}();
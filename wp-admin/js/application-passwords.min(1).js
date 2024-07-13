/*! This file is auto-generated */
!function(o){var a=o("#application-passwords-section"),i=a.find(".create-application-password"),t=i.find(".input"),n=i.find(".button"),p=a.find(".application-passwords-list-table-wrapper"),r=a.find("tbody"),d=r.find(".no-items"),e=o("#revoke-all-application-passwords"),l=wp.template("new-application-password"),c=wp.template("application-password-row"),u=o("#user_id").val();function w(e,s,a){f(a=e.responseJSON&&e.responseJSON.message?e.responseJSON.message:a,"error")}function f(e,s){s=o("<div></div>").attr("role","alert").attr("tabindex","-1").addClass("is-dismissible notice notice-"+s).append(o("<p></p>").text(e)).append(o("<button></button>").attr("type","button").addClass("notice-dismiss").append(o("<span></span>").addClass("screen-reader-text").text(wp.i18n.__("Dismiss this notice."))));return i.after(s),s}function v(){o(".notice",a).remove()}n.on("click",function(e){var s;e.preventDefault(),n.prop("aria-disabled")||(0===(e=t.val()).length?t.trigger("focus"):(v(),n.prop("aria-disabled",!0).addClass("disabled"),s={name:e},s=wp.hooks.applyFilters("wp_application_passwords_new_password_request",s,u),wp.apiRequest({path:"/wp/v2/users/"+u+"/application-passwords?_locale=user",method:"POST",data:s}).always(function(){n.removeProp("aria-disabled").removeClass("disabled")}).done(function(e){t.val(""),n.prop("disabled",!1),i.after(l({name:e.name,password:e.password})),o(".new-application-password-notice").attr("tabindex","-1").trigger("focus"),r.prepend(c(e)),p.show(),d.remove(),wp.hooks.doAction("wp_application_passwords_created_password",e,s)}).fail(w)))}),r.on("click",".delete",function(e){var s,a;e.preventDefault(),window.confirm(wp.i18n.__("Are you sure you want to revoke this password? This action cannot be undone."))&&(s=o(this),e=(a=s.closest("tr")).data("uuid"),v(),s.prop("disabled",!0),wp.apiRequest({path:"/wp/v2/users/"+u+"/application-passwords/"+e+"?_locale=user",method:"DELETE"}).always(function(){s.prop("disabled",!1)}).done(function(e){e.deleted&&(0===a.siblings().length&&p.hide(),a.remove(),f(wp.i18n.__("Application password revoked."),"success").trigger("focus"))}).fail(w))}),e.on("click",function(e){var s;e.preventDefault(),window.confirm(wp.i18n.__("Are you sure you want to revoke all passwords? This action cannot be undone."))&&(s=o(this),v(),s.prop("disabled",!0),wp.apiRequest({path:"/wp/v2/users/"+u+"/application-passwords?_locale=user",method:"DELETE"}).always(function(){s.prop("disabled",!1)}).done(function(e){e.deleted&&(r.children().remove(),a.children(".new-application-password").remove(),p.hide(),f(wp.i18n.__("All application passwords revoked."),"success").trigger("focus"))}).fail(w))}),a.on("click",".notice-dismiss",function(e){e.preventDefault();var s=o(this).parent();s.removeAttr("role"),s.fadeTo(100,0,function(){s.slideUp(100,function(){s.remove(),t.trigger("focus")})})}),t.on("keypress",function(e){13===e.which&&(e.preventDefault(),n.trigger("click"))}),0===r.children("tr").not(d).length&&p.hide()}(jQuery);
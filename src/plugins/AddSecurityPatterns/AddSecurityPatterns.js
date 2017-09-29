/*globals define*/
/*jshint node:true, browser:true*/

/**
 * Generated by PluginGenerator 1.7.0 from webgme on Fri Sep 22 2017 14:27:24 GMT-0500 (CDT).
 * A plugin that inherits from the PluginBase. To see source code documentation about available
 * properties and methods visit %host%/docs/source/PluginBase.html.
 */

define([
    'plugin/PluginConfig',
    'text!./metadata.json',
    'plugin/PluginBase',
    'plugin/SoldityCodeGenerator/SoldityCodeGenerator/SoldityCodeGenerator',
    'common/util/ejs',
    'scsrc/util/utils',
    'scsrc/templates/ejsCache'
], function (
    PluginConfig,
    pluginMetadata,
    PluginBase,
    SolidityCodeGenerator,
    ejs,
    util,
    ejsCache) {
    'use strict';

    pluginMetadata = JSON.parse(pluginMetadata);

    /**
     * Initializes a new instance of AddSecurityPatterns.
     * @class
     * @augments {PluginBase}
     * @classdesc This class represents the plugin AddSecurityPatterns.
     * @constructor
     */
    var AddSecurityPatterns = function () {
        // Call base class' constructor.
        PluginBase.call(this);
        this.pluginMetadata = pluginMetadata;
    };

    /**
     * Metadata associated with the plugin. Contains id, name, version, description, icon, configStructue etc.
     * This is also available at the instance at this.pluginMetadata.
     * @type {object}
     */
    AddSecurityPatterns.metadata = pluginMetadata;

    // Prototypical inheritance from PluginBase.
    AddSecurityPatterns.prototype = Object.create(PluginBase.prototype);
    AddSecurityPatterns.prototype.constructor = AddSecurityPatterns;

    /**
     * Main function for the plugin to execute. This will perform the execution.
     * Notes:
     * - Always log with the provided logger.[error,warning,info,debug].
     * - Do NOT put any user interaction logic UI, etc. inside this method.
     * - callback always has to be called even if error happened.
     *
     * @param {function(string, plugin.PluginResult)} callback - the result callback
     */
    AddSecurityPatterns.prototype.main = function (callback) {
        // Use self to access core, project, result, logger etc from PluginBase.
        // These are all instantiated at this point.
        var self = this,
            nodeObject;


        // This will save the changes. If you don't want to save;
        // exclude self.save and call callback directly from this scope.
        self.save('AddSecurityPatterns updated model.')
            .then(function () {
                self.result.setSuccess(true);
                callback(null, self.result);
            })
            .catch(function (err) {
                // Result success is false at invocation.
                callback(err, self.result);
            });

    };

    return AddSecurityPatterns;
});

// source: joblet.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.joblet.CPUMetrics', null, global);
goog.exportSymbol('proto.joblet.CancelJobReq', null, global);
goog.exportSymbol('proto.joblet.CancelJobRes', null, global);
goog.exportSymbol('proto.joblet.CloudInfo', null, global);
goog.exportSymbol('proto.joblet.CreateNetworkReq', null, global);
goog.exportSymbol('proto.joblet.CreateNetworkRes', null, global);
goog.exportSymbol('proto.joblet.CreateVolumeReq', null, global);
goog.exportSymbol('proto.joblet.CreateVolumeRes', null, global);
goog.exportSymbol('proto.joblet.DataChunk', null, global);
goog.exportSymbol('proto.joblet.DeleteAllJobsReq', null, global);
goog.exportSymbol('proto.joblet.DeleteAllJobsRes', null, global);
goog.exportSymbol('proto.joblet.DeleteJobReq', null, global);
goog.exportSymbol('proto.joblet.DeleteJobRes', null, global);
goog.exportSymbol('proto.joblet.DiskIOMetrics', null, global);
goog.exportSymbol('proto.joblet.DiskMetrics', null, global);
goog.exportSymbol('proto.joblet.EmptyRequest', null, global);
goog.exportSymbol('proto.joblet.FileUpload', null, global);
goog.exportSymbol('proto.joblet.GetJobLogsReq', null, global);
goog.exportSymbol('proto.joblet.GetJobStatusReq', null, global);
goog.exportSymbol('proto.joblet.GetJobStatusRes', null, global);
goog.exportSymbol('proto.joblet.GetTelemetryRequest', null, global);
goog.exportSymbol('proto.joblet.HostInfo', null, global);
goog.exportSymbol('proto.joblet.IOMetrics', null, global);
goog.exportSymbol('proto.joblet.InstallRuntimeFromLocalRequest', null, global);
goog.exportSymbol('proto.joblet.InstallRuntimeRequest', null, global);
goog.exportSymbol('proto.joblet.InstallRuntimeResponse', null, global);
goog.exportSymbol('proto.joblet.Job', null, global);
goog.exportSymbol('proto.joblet.Jobs', null, global);
goog.exportSymbol('proto.joblet.MemoryMetrics', null, global);
goog.exportSymbol('proto.joblet.Network', null, global);
goog.exportSymbol('proto.joblet.NetworkMetrics', null, global);
goog.exportSymbol('proto.joblet.Networks', null, global);
goog.exportSymbol('proto.joblet.ProcessInfo', null, global);
goog.exportSymbol('proto.joblet.ProcessMetrics', null, global);
goog.exportSymbol('proto.joblet.RemoveNetworkReq', null, global);
goog.exportSymbol('proto.joblet.RemoveNetworkRes', null, global);
goog.exportSymbol('proto.joblet.RemoveVolumeReq', null, global);
goog.exportSymbol('proto.joblet.RemoveVolumeRes', null, global);
goog.exportSymbol('proto.joblet.RunJobRequest', null, global);
goog.exportSymbol('proto.joblet.RunJobResponse', null, global);
goog.exportSymbol('proto.joblet.RuntimeFile', null, global);
goog.exportSymbol('proto.joblet.RuntimeInfo', null, global);
goog.exportSymbol('proto.joblet.RuntimeInfoReq', null, global);
goog.exportSymbol('proto.joblet.RuntimeInfoRes', null, global);
goog.exportSymbol('proto.joblet.RuntimeInstallationChunk', null, global);
goog.exportSymbol('proto.joblet.RuntimeInstallationChunk.ChunkTypeCase', null, global);
goog.exportSymbol('proto.joblet.RuntimeInstallationLog', null, global);
goog.exportSymbol('proto.joblet.RuntimeInstallationProgress', null, global);
goog.exportSymbol('proto.joblet.RuntimeInstallationResult', null, global);
goog.exportSymbol('proto.joblet.RuntimeRemoveReq', null, global);
goog.exportSymbol('proto.joblet.RuntimeRemoveRes', null, global);
goog.exportSymbol('proto.joblet.RuntimeRequirements', null, global);
goog.exportSymbol('proto.joblet.RuntimeSpecInfo', null, global);
goog.exportSymbol('proto.joblet.RuntimeTestReq', null, global);
goog.exportSymbol('proto.joblet.RuntimeTestRes', null, global);
goog.exportSymbol('proto.joblet.RuntimesRes', null, global);
goog.exportSymbol('proto.joblet.ServerVersionInfo', null, global);
goog.exportSymbol('proto.joblet.StopJobReq', null, global);
goog.exportSymbol('proto.joblet.StopJobRes', null, global);
goog.exportSymbol('proto.joblet.StreamMetricsReq', null, global);
goog.exportSymbol('proto.joblet.StreamTelemetryRequest', null, global);
goog.exportSymbol('proto.joblet.SystemMetricsRes', null, global);
goog.exportSymbol('proto.joblet.SystemStatusRes', null, global);
goog.exportSymbol('proto.joblet.TelemetryConnectData', null, global);
goog.exportSymbol('proto.joblet.TelemetryEvent', null, global);
goog.exportSymbol('proto.joblet.TelemetryEvent.DataCase', null, global);
goog.exportSymbol('proto.joblet.TelemetryExecData', null, global);
goog.exportSymbol('proto.joblet.TelemetryFileData', null, global);
goog.exportSymbol('proto.joblet.TelemetryMetricsData', null, global);
goog.exportSymbol('proto.joblet.Timestamp', null, global);
goog.exportSymbol('proto.joblet.ValidateRuntimeSpecRequest', null, global);
goog.exportSymbol('proto.joblet.ValidateRuntimeSpecResponse', null, global);
goog.exportSymbol('proto.joblet.Volume', null, global);
goog.exportSymbol('proto.joblet.Volumes', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.Jobs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.Jobs.repeatedFields_, null);
};
goog.inherits(proto.joblet.Jobs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.Jobs.displayName = 'proto.joblet.Jobs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.Job = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.Job.repeatedFields_, null);
};
goog.inherits(proto.joblet.Job, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.Job.displayName = 'proto.joblet.Job';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.EmptyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.EmptyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.EmptyRequest.displayName = 'proto.joblet.EmptyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.FileUpload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.FileUpload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.FileUpload.displayName = 'proto.joblet.FileUpload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.GetJobStatusReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.GetJobStatusReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.GetJobStatusReq.displayName = 'proto.joblet.GetJobStatusReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.GetJobStatusRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.GetJobStatusRes.repeatedFields_, null);
};
goog.inherits(proto.joblet.GetJobStatusRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.GetJobStatusRes.displayName = 'proto.joblet.GetJobStatusRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.StopJobReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.StopJobReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.StopJobReq.displayName = 'proto.joblet.StopJobReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.StopJobRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.StopJobRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.StopJobRes.displayName = 'proto.joblet.StopJobRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.CancelJobReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.CancelJobReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.CancelJobReq.displayName = 'proto.joblet.CancelJobReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.CancelJobRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.CancelJobRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.CancelJobRes.displayName = 'proto.joblet.CancelJobRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.DeleteJobReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.DeleteJobReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.DeleteJobReq.displayName = 'proto.joblet.DeleteJobReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.DeleteJobRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.DeleteJobRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.DeleteJobRes.displayName = 'proto.joblet.DeleteJobRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.DeleteAllJobsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.DeleteAllJobsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.DeleteAllJobsReq.displayName = 'proto.joblet.DeleteAllJobsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.DeleteAllJobsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.DeleteAllJobsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.DeleteAllJobsRes.displayName = 'proto.joblet.DeleteAllJobsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.GetJobLogsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.GetJobLogsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.GetJobLogsReq.displayName = 'proto.joblet.GetJobLogsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.DataChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.DataChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.DataChunk.displayName = 'proto.joblet.DataChunk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeInstallationChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.joblet.RuntimeInstallationChunk.oneofGroups_);
};
goog.inherits(proto.joblet.RuntimeInstallationChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeInstallationChunk.displayName = 'proto.joblet.RuntimeInstallationChunk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeInstallationProgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RuntimeInstallationProgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeInstallationProgress.displayName = 'proto.joblet.RuntimeInstallationProgress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeInstallationLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RuntimeInstallationLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeInstallationLog.displayName = 'proto.joblet.RuntimeInstallationLog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeInstallationResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RuntimeInstallationResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeInstallationResult.displayName = 'proto.joblet.RuntimeInstallationResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.CreateNetworkReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.CreateNetworkReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.CreateNetworkReq.displayName = 'proto.joblet.CreateNetworkReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.CreateNetworkRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.CreateNetworkRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.CreateNetworkRes.displayName = 'proto.joblet.CreateNetworkRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RemoveNetworkReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RemoveNetworkReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RemoveNetworkReq.displayName = 'proto.joblet.RemoveNetworkReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RemoveNetworkRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RemoveNetworkRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RemoveNetworkRes.displayName = 'proto.joblet.RemoveNetworkRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.Network = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.Network, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.Network.displayName = 'proto.joblet.Network';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.Networks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.Networks.repeatedFields_, null);
};
goog.inherits(proto.joblet.Networks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.Networks.displayName = 'proto.joblet.Networks';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.CreateVolumeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.CreateVolumeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.CreateVolumeReq.displayName = 'proto.joblet.CreateVolumeReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.CreateVolumeRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.CreateVolumeRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.CreateVolumeRes.displayName = 'proto.joblet.CreateVolumeRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RemoveVolumeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RemoveVolumeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RemoveVolumeReq.displayName = 'proto.joblet.RemoveVolumeReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RemoveVolumeRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RemoveVolumeRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RemoveVolumeRes.displayName = 'proto.joblet.RemoveVolumeRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.Volume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.Volume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.Volume.displayName = 'proto.joblet.Volume';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.Volumes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.Volumes.repeatedFields_, null);
};
goog.inherits(proto.joblet.Volumes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.Volumes.displayName = 'proto.joblet.Volumes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.SystemStatusRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.SystemStatusRes.repeatedFields_, null);
};
goog.inherits(proto.joblet.SystemStatusRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.SystemStatusRes.displayName = 'proto.joblet.SystemStatusRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.SystemMetricsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.SystemMetricsRes.repeatedFields_, null);
};
goog.inherits(proto.joblet.SystemMetricsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.SystemMetricsRes.displayName = 'proto.joblet.SystemMetricsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.StreamMetricsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.StreamMetricsReq.repeatedFields_, null);
};
goog.inherits(proto.joblet.StreamMetricsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.StreamMetricsReq.displayName = 'proto.joblet.StreamMetricsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.HostInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.HostInfo.repeatedFields_, null);
};
goog.inherits(proto.joblet.HostInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.HostInfo.displayName = 'proto.joblet.HostInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.CPUMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.CPUMetrics.repeatedFields_, null);
};
goog.inherits(proto.joblet.CPUMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.CPUMetrics.displayName = 'proto.joblet.CPUMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.MemoryMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.MemoryMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.MemoryMetrics.displayName = 'proto.joblet.MemoryMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.DiskMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.DiskMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.DiskMetrics.displayName = 'proto.joblet.DiskMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.NetworkMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.NetworkMetrics.repeatedFields_, null);
};
goog.inherits(proto.joblet.NetworkMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.NetworkMetrics.displayName = 'proto.joblet.NetworkMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.IOMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.IOMetrics.repeatedFields_, null);
};
goog.inherits(proto.joblet.IOMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.IOMetrics.displayName = 'proto.joblet.IOMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.DiskIOMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.DiskIOMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.DiskIOMetrics.displayName = 'proto.joblet.DiskIOMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.ProcessMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.ProcessMetrics.repeatedFields_, null);
};
goog.inherits(proto.joblet.ProcessMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.ProcessMetrics.displayName = 'proto.joblet.ProcessMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.ProcessInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.ProcessInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.ProcessInfo.displayName = 'proto.joblet.ProcessInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.CloudInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.CloudInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.CloudInfo.displayName = 'proto.joblet.CloudInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.ServerVersionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.ServerVersionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.ServerVersionInfo.displayName = 'proto.joblet.ServerVersionInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.RuntimesRes.repeatedFields_, null);
};
goog.inherits(proto.joblet.RuntimesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimesRes.displayName = 'proto.joblet.RuntimesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.RuntimeInfo.repeatedFields_, null);
};
goog.inherits(proto.joblet.RuntimeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeInfo.displayName = 'proto.joblet.RuntimeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeRequirements = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.RuntimeRequirements.repeatedFields_, null);
};
goog.inherits(proto.joblet.RuntimeRequirements, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeRequirements.displayName = 'proto.joblet.RuntimeRequirements';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RuntimeInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeInfoReq.displayName = 'proto.joblet.RuntimeInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RuntimeInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeInfoRes.displayName = 'proto.joblet.RuntimeInfoRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeTestReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RuntimeTestReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeTestReq.displayName = 'proto.joblet.RuntimeTestReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeTestRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RuntimeTestRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeTestRes.displayName = 'proto.joblet.RuntimeTestRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RunJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.RunJobRequest.repeatedFields_, null);
};
goog.inherits(proto.joblet.RunJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RunJobRequest.displayName = 'proto.joblet.RunJobRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RunJobResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.RunJobResponse.repeatedFields_, null);
};
goog.inherits(proto.joblet.RunJobResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RunJobResponse.displayName = 'proto.joblet.RunJobResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.Timestamp.displayName = 'proto.joblet.Timestamp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.InstallRuntimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.InstallRuntimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.InstallRuntimeRequest.displayName = 'proto.joblet.InstallRuntimeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.InstallRuntimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.InstallRuntimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.InstallRuntimeResponse.displayName = 'proto.joblet.InstallRuntimeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.InstallRuntimeFromLocalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.InstallRuntimeFromLocalRequest.repeatedFields_, null);
};
goog.inherits(proto.joblet.InstallRuntimeFromLocalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.InstallRuntimeFromLocalRequest.displayName = 'proto.joblet.InstallRuntimeFromLocalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RuntimeFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeFile.displayName = 'proto.joblet.RuntimeFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.ValidateRuntimeSpecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.ValidateRuntimeSpecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.ValidateRuntimeSpecRequest.displayName = 'proto.joblet.ValidateRuntimeSpecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.ValidateRuntimeSpecResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.ValidateRuntimeSpecResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.ValidateRuntimeSpecResponse.displayName = 'proto.joblet.ValidateRuntimeSpecResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeRemoveReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RuntimeRemoveReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeRemoveReq.displayName = 'proto.joblet.RuntimeRemoveReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeRemoveRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.RuntimeRemoveRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeRemoveRes.displayName = 'proto.joblet.RuntimeRemoveRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.RuntimeSpecInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.RuntimeSpecInfo.repeatedFields_, null);
};
goog.inherits(proto.joblet.RuntimeSpecInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.RuntimeSpecInfo.displayName = 'proto.joblet.RuntimeSpecInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.StreamTelemetryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.StreamTelemetryRequest.repeatedFields_, null);
};
goog.inherits(proto.joblet.StreamTelemetryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.StreamTelemetryRequest.displayName = 'proto.joblet.StreamTelemetryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.GetTelemetryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.GetTelemetryRequest.repeatedFields_, null);
};
goog.inherits(proto.joblet.GetTelemetryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.GetTelemetryRequest.displayName = 'proto.joblet.GetTelemetryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.TelemetryEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.joblet.TelemetryEvent.oneofGroups_);
};
goog.inherits(proto.joblet.TelemetryEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.TelemetryEvent.displayName = 'proto.joblet.TelemetryEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.TelemetryMetricsData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.TelemetryMetricsData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.TelemetryMetricsData.displayName = 'proto.joblet.TelemetryMetricsData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.TelemetryExecData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.joblet.TelemetryExecData.repeatedFields_, null);
};
goog.inherits(proto.joblet.TelemetryExecData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.TelemetryExecData.displayName = 'proto.joblet.TelemetryExecData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.TelemetryConnectData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.TelemetryConnectData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.TelemetryConnectData.displayName = 'proto.joblet.TelemetryConnectData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.joblet.TelemetryFileData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.joblet.TelemetryFileData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.joblet.TelemetryFileData.displayName = 'proto.joblet.TelemetryFileData';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.Jobs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.Jobs.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.Jobs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.Jobs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Jobs.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobsList: jspb.Message.toObjectList(msg.getJobsList(),
    proto.joblet.Job.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.Jobs}
 */
proto.joblet.Jobs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.Jobs;
  return proto.joblet.Jobs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.Jobs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.Jobs}
 */
proto.joblet.Jobs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.joblet.Job;
      reader.readMessage(value,proto.joblet.Job.deserializeBinaryFromReader);
      msg.addJobs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.Jobs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.Jobs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.Jobs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Jobs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.joblet.Job.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Job jobs = 1;
 * @return {!Array<!proto.joblet.Job>}
 */
proto.joblet.Jobs.prototype.getJobsList = function() {
  return /** @type{!Array<!proto.joblet.Job>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.Job, 1));
};


/**
 * @param {!Array<!proto.joblet.Job>} value
 * @return {!proto.joblet.Jobs} returns this
*/
proto.joblet.Jobs.prototype.setJobsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.joblet.Job=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.Job}
 */
proto.joblet.Jobs.prototype.addJobs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.joblet.Job, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.Jobs} returns this
 */
proto.joblet.Jobs.prototype.clearJobsList = function() {
  return this.setJobsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.Job.repeatedFields_ = [4,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.Job.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.Job.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.Job} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Job.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    command: jspb.Message.getFieldWithDefault(msg, 3, ""),
    argsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    maxcpu: jspb.Message.getFieldWithDefault(msg, 5, 0),
    cpucores: jspb.Message.getFieldWithDefault(msg, 6, ""),
    maxmemory: jspb.Message.getFieldWithDefault(msg, 7, 0),
    maxiobps: jspb.Message.getFieldWithDefault(msg, 8, 0),
    status: jspb.Message.getFieldWithDefault(msg, 9, ""),
    starttime: jspb.Message.getFieldWithDefault(msg, 10, ""),
    endtime: jspb.Message.getFieldWithDefault(msg, 11, ""),
    exitcode: jspb.Message.getFieldWithDefault(msg, 12, 0),
    scheduledtime: jspb.Message.getFieldWithDefault(msg, 13, ""),
    runtime: jspb.Message.getFieldWithDefault(msg, 14, ""),
    environmentMap: (f = msg.getEnvironmentMap()) ? f.toObject(includeInstance, undefined) : [],
    secretEnvironmentMap: (f = msg.getSecretEnvironmentMap()) ? f.toObject(includeInstance, undefined) : [],
    gpuIndicesList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    gpuCount: jspb.Message.getFieldWithDefault(msg, 18, 0),
    gpuMemoryMb: jspb.Message.getFieldWithDefault(msg, 19, 0),
    nodeid: jspb.Message.getFieldWithDefault(msg, 20, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.Job}
 */
proto.joblet.Job.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.Job;
  return proto.joblet.Job.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.Job} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.Job}
 */
proto.joblet.Job.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommand(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxcpu(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCpucores(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxmemory(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxiobps(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setStarttime(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndtime(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExitcode(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setScheduledtime(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntime(value);
      break;
    case 15:
      var value = msg.getEnvironmentMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 16:
      var value = msg.getSecretEnvironmentMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 17:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGpuIndices(values[i]);
      }
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGpuCount(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGpuMemoryMb(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.Job.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.Job.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.Job} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Job.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommand();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getMaxcpu();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCpucores();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMaxmemory();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getMaxiobps();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStarttime();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getEndtime();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getExitcode();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getScheduledtime();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getRuntime();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getEnvironmentMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(15, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSecretEnvironmentMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(16, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getGpuIndicesList();
  if (f.length > 0) {
    writer.writePackedInt32(
      17,
      f
    );
  }
  f = message.getGpuCount();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getGpuMemoryMb();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getNodeid();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.joblet.Job.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.joblet.Job.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string command = 3;
 * @return {string}
 */
proto.joblet.Job.prototype.getCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string args = 4;
 * @return {!Array<string>}
 */
proto.joblet.Job.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * optional int32 maxCPU = 5;
 * @return {number}
 */
proto.joblet.Job.prototype.getMaxcpu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setMaxcpu = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string cpuCores = 6;
 * @return {string}
 */
proto.joblet.Job.prototype.getCpucores = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setCpucores = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 maxMemory = 7;
 * @return {number}
 */
proto.joblet.Job.prototype.getMaxmemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setMaxmemory = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 maxIOBPS = 8;
 * @return {number}
 */
proto.joblet.Job.prototype.getMaxiobps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setMaxiobps = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string status = 9;
 * @return {string}
 */
proto.joblet.Job.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string startTime = 10;
 * @return {string}
 */
proto.joblet.Job.prototype.getStarttime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string endTime = 11;
 * @return {string}
 */
proto.joblet.Job.prototype.getEndtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 exitCode = 12;
 * @return {number}
 */
proto.joblet.Job.prototype.getExitcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setExitcode = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string scheduledTime = 13;
 * @return {string}
 */
proto.joblet.Job.prototype.getScheduledtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setScheduledtime = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string runtime = 14;
 * @return {string}
 */
proto.joblet.Job.prototype.getRuntime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setRuntime = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * map<string, string> environment = 15;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.joblet.Job.prototype.getEnvironmentMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 15, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.clearEnvironmentMap = function() {
  this.getEnvironmentMap().clear();
  return this;};


/**
 * map<string, string> secret_environment = 16;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.joblet.Job.prototype.getSecretEnvironmentMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 16, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.clearSecretEnvironmentMap = function() {
  this.getSecretEnvironmentMap().clear();
  return this;};


/**
 * repeated int32 gpu_indices = 17;
 * @return {!Array<number>}
 */
proto.joblet.Job.prototype.getGpuIndicesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setGpuIndicesList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.addGpuIndices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.clearGpuIndicesList = function() {
  return this.setGpuIndicesList([]);
};


/**
 * optional int32 gpu_count = 18;
 * @return {number}
 */
proto.joblet.Job.prototype.getGpuCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setGpuCount = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int32 gpu_memory_mb = 19;
 * @return {number}
 */
proto.joblet.Job.prototype.getGpuMemoryMb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setGpuMemoryMb = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string nodeId = 20;
 * @return {string}
 */
proto.joblet.Job.prototype.getNodeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Job} returns this
 */
proto.joblet.Job.prototype.setNodeid = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.EmptyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.EmptyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.EmptyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.EmptyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.EmptyRequest}
 */
proto.joblet.EmptyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.EmptyRequest;
  return proto.joblet.EmptyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.EmptyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.EmptyRequest}
 */
proto.joblet.EmptyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.EmptyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.EmptyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.EmptyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.EmptyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.FileUpload.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.FileUpload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.FileUpload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.FileUpload.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: msg.getContent_asB64(),
    mode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isdirectory: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.FileUpload}
 */
proto.joblet.FileUpload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.FileUpload;
  return proto.joblet.FileUpload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.FileUpload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.FileUpload}
 */
proto.joblet.FileUpload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMode(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdirectory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.FileUpload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.FileUpload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.FileUpload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.FileUpload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getMode();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getIsdirectory();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.joblet.FileUpload.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.FileUpload} returns this
 */
proto.joblet.FileUpload.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes content = 2;
 * @return {!(string|Uint8Array)}
 */
proto.joblet.FileUpload.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes content = 2;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.joblet.FileUpload.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.joblet.FileUpload.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.joblet.FileUpload} returns this
 */
proto.joblet.FileUpload.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint32 mode = 3;
 * @return {number}
 */
proto.joblet.FileUpload.prototype.getMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.FileUpload} returns this
 */
proto.joblet.FileUpload.prototype.setMode = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool isDirectory = 4;
 * @return {boolean}
 */
proto.joblet.FileUpload.prototype.getIsdirectory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.FileUpload} returns this
 */
proto.joblet.FileUpload.prototype.setIsdirectory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.GetJobStatusReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.GetJobStatusReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.GetJobStatusReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.GetJobStatusReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.GetJobStatusReq}
 */
proto.joblet.GetJobStatusReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.GetJobStatusReq;
  return proto.joblet.GetJobStatusReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.GetJobStatusReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.GetJobStatusReq}
 */
proto.joblet.GetJobStatusReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.GetJobStatusReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.GetJobStatusReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.GetJobStatusReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.GetJobStatusReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.joblet.GetJobStatusReq.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusReq} returns this
 */
proto.joblet.GetJobStatusReq.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.GetJobStatusRes.repeatedFields_ = [4,17,20,23];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.GetJobStatusRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.GetJobStatusRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.GetJobStatusRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.GetJobStatusRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    command: jspb.Message.getFieldWithDefault(msg, 3, ""),
    argsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    maxcpu: jspb.Message.getFieldWithDefault(msg, 5, 0),
    cpucores: jspb.Message.getFieldWithDefault(msg, 6, ""),
    maxmemory: jspb.Message.getFieldWithDefault(msg, 7, 0),
    maxiobps: jspb.Message.getFieldWithDefault(msg, 8, 0),
    status: jspb.Message.getFieldWithDefault(msg, 9, ""),
    starttime: jspb.Message.getFieldWithDefault(msg, 10, ""),
    endtime: jspb.Message.getFieldWithDefault(msg, 11, ""),
    exitcode: jspb.Message.getFieldWithDefault(msg, 12, 0),
    scheduledtime: jspb.Message.getFieldWithDefault(msg, 13, ""),
    environmentMap: (f = msg.getEnvironmentMap()) ? f.toObject(includeInstance, undefined) : [],
    secretEnvironmentMap: (f = msg.getSecretEnvironmentMap()) ? f.toObject(includeInstance, undefined) : [],
    network: jspb.Message.getFieldWithDefault(msg, 16, ""),
    volumesList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    runtime: jspb.Message.getFieldWithDefault(msg, 18, ""),
    workdir: jspb.Message.getFieldWithDefault(msg, 19, ""),
    uploadsList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    gpuIndicesList: (f = jspb.Message.getRepeatedField(msg, 23)) == null ? undefined : f,
    gpuCount: jspb.Message.getFieldWithDefault(msg, 24, 0),
    gpuMemoryMb: jspb.Message.getFieldWithDefault(msg, 25, 0),
    nodeid: jspb.Message.getFieldWithDefault(msg, 26, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.GetJobStatusRes}
 */
proto.joblet.GetJobStatusRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.GetJobStatusRes;
  return proto.joblet.GetJobStatusRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.GetJobStatusRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.GetJobStatusRes}
 */
proto.joblet.GetJobStatusRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommand(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxcpu(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCpucores(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxmemory(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxiobps(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setStarttime(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndtime(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExitcode(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setScheduledtime(value);
      break;
    case 14:
      var value = msg.getEnvironmentMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 15:
      var value = msg.getSecretEnvironmentMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addVolumes(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntime(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkdir(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.addUploads(value);
      break;
    case 23:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGpuIndices(values[i]);
      }
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGpuCount(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGpuMemoryMb(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.GetJobStatusRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.GetJobStatusRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.GetJobStatusRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.GetJobStatusRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommand();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getMaxcpu();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCpucores();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMaxmemory();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getMaxiobps();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStarttime();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getEndtime();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getExitcode();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getScheduledtime();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getEnvironmentMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(14, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSecretEnvironmentMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(15, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getNetwork();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getVolumesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getRuntime();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getWorkdir();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getUploadsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      20,
      f
    );
  }
  f = message.getGpuIndicesList();
  if (f.length > 0) {
    writer.writePackedInt32(
      23,
      f
    );
  }
  f = message.getGpuCount();
  if (f !== 0) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = message.getGpuMemoryMb();
  if (f !== 0) {
    writer.writeInt32(
      25,
      f
    );
  }
  f = message.getNodeid();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string command = 3;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string args = 4;
 * @return {!Array<string>}
 */
proto.joblet.GetJobStatusRes.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * optional int32 maxCPU = 5;
 * @return {number}
 */
proto.joblet.GetJobStatusRes.prototype.getMaxcpu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setMaxcpu = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string cpuCores = 6;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getCpucores = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setCpucores = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 maxMemory = 7;
 * @return {number}
 */
proto.joblet.GetJobStatusRes.prototype.getMaxmemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setMaxmemory = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 maxIOBPS = 8;
 * @return {number}
 */
proto.joblet.GetJobStatusRes.prototype.getMaxiobps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setMaxiobps = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string status = 9;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string startTime = 10;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getStarttime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string endTime = 11;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getEndtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 exitCode = 12;
 * @return {number}
 */
proto.joblet.GetJobStatusRes.prototype.getExitcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setExitcode = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string scheduledTime = 13;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getScheduledtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setScheduledtime = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * map<string, string> environment = 14;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.joblet.GetJobStatusRes.prototype.getEnvironmentMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 14, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.clearEnvironmentMap = function() {
  this.getEnvironmentMap().clear();
  return this;};


/**
 * map<string, string> secret_environment = 15;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.joblet.GetJobStatusRes.prototype.getSecretEnvironmentMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 15, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.clearSecretEnvironmentMap = function() {
  this.getSecretEnvironmentMap().clear();
  return this;};


/**
 * optional string network = 16;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * repeated string volumes = 17;
 * @return {!Array<string>}
 */
proto.joblet.GetJobStatusRes.prototype.getVolumesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setVolumesList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.addVolumes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.clearVolumesList = function() {
  return this.setVolumesList([]);
};


/**
 * optional string runtime = 18;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getRuntime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setRuntime = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string workDir = 19;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getWorkdir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setWorkdir = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * repeated string uploads = 20;
 * @return {!Array<string>}
 */
proto.joblet.GetJobStatusRes.prototype.getUploadsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setUploadsList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.addUploads = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.clearUploadsList = function() {
  return this.setUploadsList([]);
};


/**
 * repeated int32 gpu_indices = 23;
 * @return {!Array<number>}
 */
proto.joblet.GetJobStatusRes.prototype.getGpuIndicesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 23));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setGpuIndicesList = function(value) {
  return jspb.Message.setField(this, 23, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.addGpuIndices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 23, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.clearGpuIndicesList = function() {
  return this.setGpuIndicesList([]);
};


/**
 * optional int32 gpu_count = 24;
 * @return {number}
 */
proto.joblet.GetJobStatusRes.prototype.getGpuCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setGpuCount = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional int32 gpu_memory_mb = 25;
 * @return {number}
 */
proto.joblet.GetJobStatusRes.prototype.getGpuMemoryMb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setGpuMemoryMb = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional string nodeId = 26;
 * @return {string}
 */
proto.joblet.GetJobStatusRes.prototype.getNodeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobStatusRes} returns this
 */
proto.joblet.GetJobStatusRes.prototype.setNodeid = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.StopJobReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.StopJobReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.StopJobReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.StopJobReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.StopJobReq}
 */
proto.joblet.StopJobReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.StopJobReq;
  return proto.joblet.StopJobReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.StopJobReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.StopJobReq}
 */
proto.joblet.StopJobReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.StopJobReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.StopJobReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.StopJobReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.StopJobReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.joblet.StopJobReq.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.StopJobReq} returns this
 */
proto.joblet.StopJobReq.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.StopJobRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.StopJobRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.StopJobRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.StopJobRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, ""),
    endtime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    exitcode: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.StopJobRes}
 */
proto.joblet.StopJobRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.StopJobRes;
  return proto.joblet.StopJobRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.StopJobRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.StopJobRes}
 */
proto.joblet.StopJobRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndtime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExitcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.StopJobRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.StopJobRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.StopJobRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.StopJobRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEndtime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExitcode();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.joblet.StopJobRes.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.StopJobRes} returns this
 */
proto.joblet.StopJobRes.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.joblet.StopJobRes.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.StopJobRes} returns this
 */
proto.joblet.StopJobRes.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string endTime = 3;
 * @return {string}
 */
proto.joblet.StopJobRes.prototype.getEndtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.StopJobRes} returns this
 */
proto.joblet.StopJobRes.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 exitCode = 4;
 * @return {number}
 */
proto.joblet.StopJobRes.prototype.getExitcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.StopJobRes} returns this
 */
proto.joblet.StopJobRes.prototype.setExitcode = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.CancelJobReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.CancelJobReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.CancelJobReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CancelJobReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.CancelJobReq}
 */
proto.joblet.CancelJobReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.CancelJobReq;
  return proto.joblet.CancelJobReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.CancelJobReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.CancelJobReq}
 */
proto.joblet.CancelJobReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.CancelJobReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.CancelJobReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.CancelJobReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CancelJobReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.joblet.CancelJobReq.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CancelJobReq} returns this
 */
proto.joblet.CancelJobReq.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.CancelJobRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.CancelJobRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.CancelJobRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CancelJobRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.CancelJobRes}
 */
proto.joblet.CancelJobRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.CancelJobRes;
  return proto.joblet.CancelJobRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.CancelJobRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.CancelJobRes}
 */
proto.joblet.CancelJobRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.CancelJobRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.CancelJobRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.CancelJobRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CancelJobRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.joblet.CancelJobRes.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CancelJobRes} returns this
 */
proto.joblet.CancelJobRes.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.joblet.CancelJobRes.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CancelJobRes} returns this
 */
proto.joblet.CancelJobRes.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.DeleteJobReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.DeleteJobReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.DeleteJobReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DeleteJobReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.DeleteJobReq}
 */
proto.joblet.DeleteJobReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.DeleteJobReq;
  return proto.joblet.DeleteJobReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.DeleteJobReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.DeleteJobReq}
 */
proto.joblet.DeleteJobReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.DeleteJobReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.DeleteJobReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.DeleteJobReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DeleteJobReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.joblet.DeleteJobReq.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.DeleteJobReq} returns this
 */
proto.joblet.DeleteJobReq.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.DeleteJobRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.DeleteJobRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.DeleteJobRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DeleteJobRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    message: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.DeleteJobRes}
 */
proto.joblet.DeleteJobRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.DeleteJobRes;
  return proto.joblet.DeleteJobRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.DeleteJobRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.DeleteJobRes}
 */
proto.joblet.DeleteJobRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.DeleteJobRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.DeleteJobRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.DeleteJobRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DeleteJobRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.joblet.DeleteJobRes.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.DeleteJobRes} returns this
 */
proto.joblet.DeleteJobRes.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.joblet.DeleteJobRes.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.DeleteJobRes} returns this
 */
proto.joblet.DeleteJobRes.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.joblet.DeleteJobRes.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.DeleteJobRes} returns this
 */
proto.joblet.DeleteJobRes.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.DeleteAllJobsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.DeleteAllJobsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.DeleteAllJobsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DeleteAllJobsReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.DeleteAllJobsReq}
 */
proto.joblet.DeleteAllJobsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.DeleteAllJobsReq;
  return proto.joblet.DeleteAllJobsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.DeleteAllJobsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.DeleteAllJobsReq}
 */
proto.joblet.DeleteAllJobsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.DeleteAllJobsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.DeleteAllJobsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.DeleteAllJobsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DeleteAllJobsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.DeleteAllJobsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.DeleteAllJobsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.DeleteAllJobsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DeleteAllJobsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deletedCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    skippedCount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.DeleteAllJobsRes}
 */
proto.joblet.DeleteAllJobsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.DeleteAllJobsRes;
  return proto.joblet.DeleteAllJobsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.DeleteAllJobsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.DeleteAllJobsRes}
 */
proto.joblet.DeleteAllJobsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeletedCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSkippedCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.DeleteAllJobsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.DeleteAllJobsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.DeleteAllJobsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DeleteAllJobsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeletedCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSkippedCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.joblet.DeleteAllJobsRes.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.DeleteAllJobsRes} returns this
 */
proto.joblet.DeleteAllJobsRes.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.joblet.DeleteAllJobsRes.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.DeleteAllJobsRes} returns this
 */
proto.joblet.DeleteAllJobsRes.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 deleted_count = 3;
 * @return {number}
 */
proto.joblet.DeleteAllJobsRes.prototype.getDeletedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DeleteAllJobsRes} returns this
 */
proto.joblet.DeleteAllJobsRes.prototype.setDeletedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 skipped_count = 4;
 * @return {number}
 */
proto.joblet.DeleteAllJobsRes.prototype.getSkippedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DeleteAllJobsRes} returns this
 */
proto.joblet.DeleteAllJobsRes.prototype.setSkippedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.GetJobLogsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.GetJobLogsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.GetJobLogsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.GetJobLogsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.GetJobLogsReq}
 */
proto.joblet.GetJobLogsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.GetJobLogsReq;
  return proto.joblet.GetJobLogsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.GetJobLogsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.GetJobLogsReq}
 */
proto.joblet.GetJobLogsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.GetJobLogsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.GetJobLogsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.GetJobLogsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.GetJobLogsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.joblet.GetJobLogsReq.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetJobLogsReq} returns this
 */
proto.joblet.GetJobLogsReq.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.DataChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.DataChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.DataChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DataChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: msg.getPayload_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.DataChunk}
 */
proto.joblet.DataChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.DataChunk;
  return proto.joblet.DataChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.DataChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.DataChunk}
 */
proto.joblet.DataChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.DataChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.DataChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.DataChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DataChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.joblet.DataChunk.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes payload = 1;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.joblet.DataChunk.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.joblet.DataChunk.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.joblet.DataChunk} returns this
 */
proto.joblet.DataChunk.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.joblet.RuntimeInstallationChunk.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.joblet.RuntimeInstallationChunk.ChunkTypeCase = {
  CHUNK_TYPE_NOT_SET: 0,
  PROGRESS: 1,
  LOG: 2,
  RESULT: 3
};

/**
 * @return {proto.joblet.RuntimeInstallationChunk.ChunkTypeCase}
 */
proto.joblet.RuntimeInstallationChunk.prototype.getChunkTypeCase = function() {
  return /** @type {proto.joblet.RuntimeInstallationChunk.ChunkTypeCase} */(jspb.Message.computeOneofCase(this, proto.joblet.RuntimeInstallationChunk.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeInstallationChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeInstallationChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeInstallationChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInstallationChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    progress: (f = msg.getProgress()) && proto.joblet.RuntimeInstallationProgress.toObject(includeInstance, f),
    log: (f = msg.getLog()) && proto.joblet.RuntimeInstallationLog.toObject(includeInstance, f),
    result: (f = msg.getResult()) && proto.joblet.RuntimeInstallationResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeInstallationChunk}
 */
proto.joblet.RuntimeInstallationChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeInstallationChunk;
  return proto.joblet.RuntimeInstallationChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeInstallationChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeInstallationChunk}
 */
proto.joblet.RuntimeInstallationChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.joblet.RuntimeInstallationProgress;
      reader.readMessage(value,proto.joblet.RuntimeInstallationProgress.deserializeBinaryFromReader);
      msg.setProgress(value);
      break;
    case 2:
      var value = new proto.joblet.RuntimeInstallationLog;
      reader.readMessage(value,proto.joblet.RuntimeInstallationLog.deserializeBinaryFromReader);
      msg.setLog(value);
      break;
    case 3:
      var value = new proto.joblet.RuntimeInstallationResult;
      reader.readMessage(value,proto.joblet.RuntimeInstallationResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeInstallationChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeInstallationChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeInstallationChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInstallationChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.joblet.RuntimeInstallationProgress.serializeBinaryToWriter
    );
  }
  f = message.getLog();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.joblet.RuntimeInstallationLog.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.joblet.RuntimeInstallationResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional RuntimeInstallationProgress progress = 1;
 * @return {?proto.joblet.RuntimeInstallationProgress}
 */
proto.joblet.RuntimeInstallationChunk.prototype.getProgress = function() {
  return /** @type{?proto.joblet.RuntimeInstallationProgress} */ (
    jspb.Message.getWrapperField(this, proto.joblet.RuntimeInstallationProgress, 1));
};


/**
 * @param {?proto.joblet.RuntimeInstallationProgress|undefined} value
 * @return {!proto.joblet.RuntimeInstallationChunk} returns this
*/
proto.joblet.RuntimeInstallationChunk.prototype.setProgress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.joblet.RuntimeInstallationChunk.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.RuntimeInstallationChunk} returns this
 */
proto.joblet.RuntimeInstallationChunk.prototype.clearProgress = function() {
  return this.setProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.RuntimeInstallationChunk.prototype.hasProgress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RuntimeInstallationLog log = 2;
 * @return {?proto.joblet.RuntimeInstallationLog}
 */
proto.joblet.RuntimeInstallationChunk.prototype.getLog = function() {
  return /** @type{?proto.joblet.RuntimeInstallationLog} */ (
    jspb.Message.getWrapperField(this, proto.joblet.RuntimeInstallationLog, 2));
};


/**
 * @param {?proto.joblet.RuntimeInstallationLog|undefined} value
 * @return {!proto.joblet.RuntimeInstallationChunk} returns this
*/
proto.joblet.RuntimeInstallationChunk.prototype.setLog = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.joblet.RuntimeInstallationChunk.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.RuntimeInstallationChunk} returns this
 */
proto.joblet.RuntimeInstallationChunk.prototype.clearLog = function() {
  return this.setLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.RuntimeInstallationChunk.prototype.hasLog = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RuntimeInstallationResult result = 3;
 * @return {?proto.joblet.RuntimeInstallationResult}
 */
proto.joblet.RuntimeInstallationChunk.prototype.getResult = function() {
  return /** @type{?proto.joblet.RuntimeInstallationResult} */ (
    jspb.Message.getWrapperField(this, proto.joblet.RuntimeInstallationResult, 3));
};


/**
 * @param {?proto.joblet.RuntimeInstallationResult|undefined} value
 * @return {!proto.joblet.RuntimeInstallationChunk} returns this
*/
proto.joblet.RuntimeInstallationChunk.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.joblet.RuntimeInstallationChunk.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.RuntimeInstallationChunk} returns this
 */
proto.joblet.RuntimeInstallationChunk.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.RuntimeInstallationChunk.prototype.hasResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeInstallationProgress.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeInstallationProgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeInstallationProgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInstallationProgress.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    step: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalSteps: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeInstallationProgress}
 */
proto.joblet.RuntimeInstallationProgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeInstallationProgress;
  return proto.joblet.RuntimeInstallationProgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeInstallationProgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeInstallationProgress}
 */
proto.joblet.RuntimeInstallationProgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStep(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalSteps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeInstallationProgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeInstallationProgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeInstallationProgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInstallationProgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStep();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTotalSteps();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.joblet.RuntimeInstallationProgress.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeInstallationProgress} returns this
 */
proto.joblet.RuntimeInstallationProgress.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 step = 2;
 * @return {number}
 */
proto.joblet.RuntimeInstallationProgress.prototype.getStep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RuntimeInstallationProgress} returns this
 */
proto.joblet.RuntimeInstallationProgress.prototype.setStep = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 total_steps = 3;
 * @return {number}
 */
proto.joblet.RuntimeInstallationProgress.prototype.getTotalSteps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RuntimeInstallationProgress} returns this
 */
proto.joblet.RuntimeInstallationProgress.prototype.setTotalSteps = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeInstallationLog.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeInstallationLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeInstallationLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInstallationLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeInstallationLog}
 */
proto.joblet.RuntimeInstallationLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeInstallationLog;
  return proto.joblet.RuntimeInstallationLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeInstallationLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeInstallationLog}
 */
proto.joblet.RuntimeInstallationLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeInstallationLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeInstallationLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeInstallationLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInstallationLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.joblet.RuntimeInstallationLog.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.joblet.RuntimeInstallationLog.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeInstallationLog.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.joblet.RuntimeInstallationLog} returns this
 */
proto.joblet.RuntimeInstallationLog.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeInstallationResult.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeInstallationResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeInstallationResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInstallationResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    runtimeSpec: jspb.Message.getFieldWithDefault(msg, 3, ""),
    installPath: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeInstallationResult}
 */
proto.joblet.RuntimeInstallationResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeInstallationResult;
  return proto.joblet.RuntimeInstallationResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeInstallationResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeInstallationResult}
 */
proto.joblet.RuntimeInstallationResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntimeSpec(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstallPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeInstallationResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeInstallationResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeInstallationResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInstallationResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRuntimeSpec();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInstallPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.joblet.RuntimeInstallationResult.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.RuntimeInstallationResult} returns this
 */
proto.joblet.RuntimeInstallationResult.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.joblet.RuntimeInstallationResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeInstallationResult} returns this
 */
proto.joblet.RuntimeInstallationResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string runtime_spec = 3;
 * @return {string}
 */
proto.joblet.RuntimeInstallationResult.prototype.getRuntimeSpec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeInstallationResult} returns this
 */
proto.joblet.RuntimeInstallationResult.prototype.setRuntimeSpec = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string install_path = 4;
 * @return {string}
 */
proto.joblet.RuntimeInstallationResult.prototype.getInstallPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeInstallationResult} returns this
 */
proto.joblet.RuntimeInstallationResult.prototype.setInstallPath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.CreateNetworkReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.CreateNetworkReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.CreateNetworkReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CreateNetworkReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cidr: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.CreateNetworkReq}
 */
proto.joblet.CreateNetworkReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.CreateNetworkReq;
  return proto.joblet.CreateNetworkReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.CreateNetworkReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.CreateNetworkReq}
 */
proto.joblet.CreateNetworkReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCidr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.CreateNetworkReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.CreateNetworkReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.CreateNetworkReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CreateNetworkReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCidr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.joblet.CreateNetworkReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateNetworkReq} returns this
 */
proto.joblet.CreateNetworkReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cidr = 2;
 * @return {string}
 */
proto.joblet.CreateNetworkReq.prototype.getCidr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateNetworkReq} returns this
 */
proto.joblet.CreateNetworkReq.prototype.setCidr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.CreateNetworkRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.CreateNetworkRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.CreateNetworkRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CreateNetworkRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cidr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bridge: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.CreateNetworkRes}
 */
proto.joblet.CreateNetworkRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.CreateNetworkRes;
  return proto.joblet.CreateNetworkRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.CreateNetworkRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.CreateNetworkRes}
 */
proto.joblet.CreateNetworkRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCidr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBridge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.CreateNetworkRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.CreateNetworkRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.CreateNetworkRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CreateNetworkRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCidr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBridge();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.joblet.CreateNetworkRes.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateNetworkRes} returns this
 */
proto.joblet.CreateNetworkRes.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cidr = 2;
 * @return {string}
 */
proto.joblet.CreateNetworkRes.prototype.getCidr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateNetworkRes} returns this
 */
proto.joblet.CreateNetworkRes.prototype.setCidr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bridge = 3;
 * @return {string}
 */
proto.joblet.CreateNetworkRes.prototype.getBridge = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateNetworkRes} returns this
 */
proto.joblet.CreateNetworkRes.prototype.setBridge = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RemoveNetworkReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RemoveNetworkReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RemoveNetworkReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RemoveNetworkReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RemoveNetworkReq}
 */
proto.joblet.RemoveNetworkReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RemoveNetworkReq;
  return proto.joblet.RemoveNetworkReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RemoveNetworkReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RemoveNetworkReq}
 */
proto.joblet.RemoveNetworkReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RemoveNetworkReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RemoveNetworkReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RemoveNetworkReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RemoveNetworkReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.joblet.RemoveNetworkReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RemoveNetworkReq} returns this
 */
proto.joblet.RemoveNetworkReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RemoveNetworkRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RemoveNetworkRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RemoveNetworkRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RemoveNetworkRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RemoveNetworkRes}
 */
proto.joblet.RemoveNetworkRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RemoveNetworkRes;
  return proto.joblet.RemoveNetworkRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RemoveNetworkRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RemoveNetworkRes}
 */
proto.joblet.RemoveNetworkRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RemoveNetworkRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RemoveNetworkRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RemoveNetworkRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RemoveNetworkRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.joblet.RemoveNetworkRes.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.RemoveNetworkRes} returns this
 */
proto.joblet.RemoveNetworkRes.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.joblet.RemoveNetworkRes.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RemoveNetworkRes} returns this
 */
proto.joblet.RemoveNetworkRes.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.Network.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.Network.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.Network} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Network.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cidr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bridge: jspb.Message.getFieldWithDefault(msg, 3, ""),
    jobcount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.Network}
 */
proto.joblet.Network.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.Network;
  return proto.joblet.Network.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.Network} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.Network}
 */
proto.joblet.Network.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCidr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBridge(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJobcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.Network.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.Network.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.Network} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Network.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCidr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBridge();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getJobcount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.joblet.Network.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Network} returns this
 */
proto.joblet.Network.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cidr = 2;
 * @return {string}
 */
proto.joblet.Network.prototype.getCidr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Network} returns this
 */
proto.joblet.Network.prototype.setCidr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bridge = 3;
 * @return {string}
 */
proto.joblet.Network.prototype.getBridge = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Network} returns this
 */
proto.joblet.Network.prototype.setBridge = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 jobCount = 4;
 * @return {number}
 */
proto.joblet.Network.prototype.getJobcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.Network} returns this
 */
proto.joblet.Network.prototype.setJobcount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.Networks.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.Networks.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.Networks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.Networks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Networks.toObject = function(includeInstance, msg) {
  var f, obj = {
    networksList: jspb.Message.toObjectList(msg.getNetworksList(),
    proto.joblet.Network.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.Networks}
 */
proto.joblet.Networks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.Networks;
  return proto.joblet.Networks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.Networks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.Networks}
 */
proto.joblet.Networks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.joblet.Network;
      reader.readMessage(value,proto.joblet.Network.deserializeBinaryFromReader);
      msg.addNetworks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.Networks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.Networks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.Networks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Networks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetworksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.joblet.Network.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Network networks = 1;
 * @return {!Array<!proto.joblet.Network>}
 */
proto.joblet.Networks.prototype.getNetworksList = function() {
  return /** @type{!Array<!proto.joblet.Network>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.Network, 1));
};


/**
 * @param {!Array<!proto.joblet.Network>} value
 * @return {!proto.joblet.Networks} returns this
*/
proto.joblet.Networks.prototype.setNetworksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.joblet.Network=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.Network}
 */
proto.joblet.Networks.prototype.addNetworks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.joblet.Network, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.Networks} returns this
 */
proto.joblet.Networks.prototype.clearNetworksList = function() {
  return this.setNetworksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.CreateVolumeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.CreateVolumeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.CreateVolumeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CreateVolumeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.CreateVolumeReq}
 */
proto.joblet.CreateVolumeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.CreateVolumeReq;
  return proto.joblet.CreateVolumeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.CreateVolumeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.CreateVolumeReq}
 */
proto.joblet.CreateVolumeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.CreateVolumeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.CreateVolumeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.CreateVolumeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CreateVolumeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.joblet.CreateVolumeReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateVolumeReq} returns this
 */
proto.joblet.CreateVolumeReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string size = 2;
 * @return {string}
 */
proto.joblet.CreateVolumeReq.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateVolumeReq} returns this
 */
proto.joblet.CreateVolumeReq.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.joblet.CreateVolumeReq.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateVolumeReq} returns this
 */
proto.joblet.CreateVolumeReq.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.CreateVolumeRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.CreateVolumeRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.CreateVolumeRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CreateVolumeRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    path: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.CreateVolumeRes}
 */
proto.joblet.CreateVolumeRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.CreateVolumeRes;
  return proto.joblet.CreateVolumeRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.CreateVolumeRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.CreateVolumeRes}
 */
proto.joblet.CreateVolumeRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.CreateVolumeRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.CreateVolumeRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.CreateVolumeRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CreateVolumeRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.joblet.CreateVolumeRes.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateVolumeRes} returns this
 */
proto.joblet.CreateVolumeRes.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string size = 2;
 * @return {string}
 */
proto.joblet.CreateVolumeRes.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateVolumeRes} returns this
 */
proto.joblet.CreateVolumeRes.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.joblet.CreateVolumeRes.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateVolumeRes} returns this
 */
proto.joblet.CreateVolumeRes.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string path = 4;
 * @return {string}
 */
proto.joblet.CreateVolumeRes.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CreateVolumeRes} returns this
 */
proto.joblet.CreateVolumeRes.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RemoveVolumeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RemoveVolumeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RemoveVolumeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RemoveVolumeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RemoveVolumeReq}
 */
proto.joblet.RemoveVolumeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RemoveVolumeReq;
  return proto.joblet.RemoveVolumeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RemoveVolumeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RemoveVolumeReq}
 */
proto.joblet.RemoveVolumeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RemoveVolumeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RemoveVolumeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RemoveVolumeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RemoveVolumeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.joblet.RemoveVolumeReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RemoveVolumeReq} returns this
 */
proto.joblet.RemoveVolumeReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RemoveVolumeRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RemoveVolumeRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RemoveVolumeRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RemoveVolumeRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RemoveVolumeRes}
 */
proto.joblet.RemoveVolumeRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RemoveVolumeRes;
  return proto.joblet.RemoveVolumeRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RemoveVolumeRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RemoveVolumeRes}
 */
proto.joblet.RemoveVolumeRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RemoveVolumeRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RemoveVolumeRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RemoveVolumeRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RemoveVolumeRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.joblet.RemoveVolumeRes.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.RemoveVolumeRes} returns this
 */
proto.joblet.RemoveVolumeRes.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.joblet.RemoveVolumeRes.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RemoveVolumeRes} returns this
 */
proto.joblet.RemoveVolumeRes.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.Volume.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.Volume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.Volume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Volume.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    path: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdtime: jspb.Message.getFieldWithDefault(msg, 5, ""),
    jobcount: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.Volume}
 */
proto.joblet.Volume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.Volume;
  return proto.joblet.Volume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.Volume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.Volume}
 */
proto.joblet.Volume.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedtime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJobcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.Volume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.Volume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.Volume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Volume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedtime();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getJobcount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.joblet.Volume.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Volume} returns this
 */
proto.joblet.Volume.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string size = 2;
 * @return {string}
 */
proto.joblet.Volume.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Volume} returns this
 */
proto.joblet.Volume.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.joblet.Volume.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Volume} returns this
 */
proto.joblet.Volume.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string path = 4;
 * @return {string}
 */
proto.joblet.Volume.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Volume} returns this
 */
proto.joblet.Volume.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string createdTime = 5;
 * @return {string}
 */
proto.joblet.Volume.prototype.getCreatedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.Volume} returns this
 */
proto.joblet.Volume.prototype.setCreatedtime = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 jobCount = 6;
 * @return {number}
 */
proto.joblet.Volume.prototype.getJobcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.Volume} returns this
 */
proto.joblet.Volume.prototype.setJobcount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.Volumes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.Volumes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.Volumes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.Volumes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Volumes.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumesList: jspb.Message.toObjectList(msg.getVolumesList(),
    proto.joblet.Volume.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.Volumes}
 */
proto.joblet.Volumes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.Volumes;
  return proto.joblet.Volumes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.Volumes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.Volumes}
 */
proto.joblet.Volumes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.joblet.Volume;
      reader.readMessage(value,proto.joblet.Volume.deserializeBinaryFromReader);
      msg.addVolumes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.Volumes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.Volumes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.Volumes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Volumes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.joblet.Volume.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Volume volumes = 1;
 * @return {!Array<!proto.joblet.Volume>}
 */
proto.joblet.Volumes.prototype.getVolumesList = function() {
  return /** @type{!Array<!proto.joblet.Volume>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.Volume, 1));
};


/**
 * @param {!Array<!proto.joblet.Volume>} value
 * @return {!proto.joblet.Volumes} returns this
*/
proto.joblet.Volumes.prototype.setVolumesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.joblet.Volume=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.Volume}
 */
proto.joblet.Volumes.prototype.addVolumes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.joblet.Volume, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.Volumes} returns this
 */
proto.joblet.Volumes.prototype.clearVolumesList = function() {
  return this.setVolumesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.SystemStatusRes.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.SystemStatusRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.SystemStatusRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.SystemStatusRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.SystemStatusRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, ""),
    available: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    host: (f = msg.getHost()) && proto.joblet.HostInfo.toObject(includeInstance, f),
    cpu: (f = msg.getCpu()) && proto.joblet.CPUMetrics.toObject(includeInstance, f),
    memory: (f = msg.getMemory()) && proto.joblet.MemoryMetrics.toObject(includeInstance, f),
    disksList: jspb.Message.toObjectList(msg.getDisksList(),
    proto.joblet.DiskMetrics.toObject, includeInstance),
    networksList: jspb.Message.toObjectList(msg.getNetworksList(),
    proto.joblet.NetworkMetrics.toObject, includeInstance),
    io: (f = msg.getIo()) && proto.joblet.IOMetrics.toObject(includeInstance, f),
    processes: (f = msg.getProcesses()) && proto.joblet.ProcessMetrics.toObject(includeInstance, f),
    cloud: (f = msg.getCloud()) && proto.joblet.CloudInfo.toObject(includeInstance, f),
    serverVersion: (f = msg.getServerVersion()) && proto.joblet.ServerVersionInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.SystemStatusRes}
 */
proto.joblet.SystemStatusRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.SystemStatusRes;
  return proto.joblet.SystemStatusRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.SystemStatusRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.SystemStatusRes}
 */
proto.joblet.SystemStatusRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAvailable(value);
      break;
    case 3:
      var value = new proto.joblet.HostInfo;
      reader.readMessage(value,proto.joblet.HostInfo.deserializeBinaryFromReader);
      msg.setHost(value);
      break;
    case 4:
      var value = new proto.joblet.CPUMetrics;
      reader.readMessage(value,proto.joblet.CPUMetrics.deserializeBinaryFromReader);
      msg.setCpu(value);
      break;
    case 5:
      var value = new proto.joblet.MemoryMetrics;
      reader.readMessage(value,proto.joblet.MemoryMetrics.deserializeBinaryFromReader);
      msg.setMemory(value);
      break;
    case 6:
      var value = new proto.joblet.DiskMetrics;
      reader.readMessage(value,proto.joblet.DiskMetrics.deserializeBinaryFromReader);
      msg.addDisks(value);
      break;
    case 7:
      var value = new proto.joblet.NetworkMetrics;
      reader.readMessage(value,proto.joblet.NetworkMetrics.deserializeBinaryFromReader);
      msg.addNetworks(value);
      break;
    case 8:
      var value = new proto.joblet.IOMetrics;
      reader.readMessage(value,proto.joblet.IOMetrics.deserializeBinaryFromReader);
      msg.setIo(value);
      break;
    case 9:
      var value = new proto.joblet.ProcessMetrics;
      reader.readMessage(value,proto.joblet.ProcessMetrics.deserializeBinaryFromReader);
      msg.setProcesses(value);
      break;
    case 10:
      var value = new proto.joblet.CloudInfo;
      reader.readMessage(value,proto.joblet.CloudInfo.deserializeBinaryFromReader);
      msg.setCloud(value);
      break;
    case 11:
      var value = new proto.joblet.ServerVersionInfo;
      reader.readMessage(value,proto.joblet.ServerVersionInfo.deserializeBinaryFromReader);
      msg.setServerVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.SystemStatusRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.SystemStatusRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.SystemStatusRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.SystemStatusRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvailable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getHost();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.joblet.HostInfo.serializeBinaryToWriter
    );
  }
  f = message.getCpu();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.joblet.CPUMetrics.serializeBinaryToWriter
    );
  }
  f = message.getMemory();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.joblet.MemoryMetrics.serializeBinaryToWriter
    );
  }
  f = message.getDisksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.joblet.DiskMetrics.serializeBinaryToWriter
    );
  }
  f = message.getNetworksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.joblet.NetworkMetrics.serializeBinaryToWriter
    );
  }
  f = message.getIo();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.joblet.IOMetrics.serializeBinaryToWriter
    );
  }
  f = message.getProcesses();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.joblet.ProcessMetrics.serializeBinaryToWriter
    );
  }
  f = message.getCloud();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.joblet.CloudInfo.serializeBinaryToWriter
    );
  }
  f = message.getServerVersion();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.joblet.ServerVersionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string timestamp = 1;
 * @return {string}
 */
proto.joblet.SystemStatusRes.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.SystemStatusRes} returns this
 */
proto.joblet.SystemStatusRes.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool available = 2;
 * @return {boolean}
 */
proto.joblet.SystemStatusRes.prototype.getAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.SystemStatusRes} returns this
 */
proto.joblet.SystemStatusRes.prototype.setAvailable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional HostInfo host = 3;
 * @return {?proto.joblet.HostInfo}
 */
proto.joblet.SystemStatusRes.prototype.getHost = function() {
  return /** @type{?proto.joblet.HostInfo} */ (
    jspb.Message.getWrapperField(this, proto.joblet.HostInfo, 3));
};


/**
 * @param {?proto.joblet.HostInfo|undefined} value
 * @return {!proto.joblet.SystemStatusRes} returns this
*/
proto.joblet.SystemStatusRes.prototype.setHost = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemStatusRes} returns this
 */
proto.joblet.SystemStatusRes.prototype.clearHost = function() {
  return this.setHost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemStatusRes.prototype.hasHost = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CPUMetrics cpu = 4;
 * @return {?proto.joblet.CPUMetrics}
 */
proto.joblet.SystemStatusRes.prototype.getCpu = function() {
  return /** @type{?proto.joblet.CPUMetrics} */ (
    jspb.Message.getWrapperField(this, proto.joblet.CPUMetrics, 4));
};


/**
 * @param {?proto.joblet.CPUMetrics|undefined} value
 * @return {!proto.joblet.SystemStatusRes} returns this
*/
proto.joblet.SystemStatusRes.prototype.setCpu = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemStatusRes} returns this
 */
proto.joblet.SystemStatusRes.prototype.clearCpu = function() {
  return this.setCpu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemStatusRes.prototype.hasCpu = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MemoryMetrics memory = 5;
 * @return {?proto.joblet.MemoryMetrics}
 */
proto.joblet.SystemStatusRes.prototype.getMemory = function() {
  return /** @type{?proto.joblet.MemoryMetrics} */ (
    jspb.Message.getWrapperField(this, proto.joblet.MemoryMetrics, 5));
};


/**
 * @param {?proto.joblet.MemoryMetrics|undefined} value
 * @return {!proto.joblet.SystemStatusRes} returns this
*/
proto.joblet.SystemStatusRes.prototype.setMemory = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemStatusRes} returns this
 */
proto.joblet.SystemStatusRes.prototype.clearMemory = function() {
  return this.setMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemStatusRes.prototype.hasMemory = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated DiskMetrics disks = 6;
 * @return {!Array<!proto.joblet.DiskMetrics>}
 */
proto.joblet.SystemStatusRes.prototype.getDisksList = function() {
  return /** @type{!Array<!proto.joblet.DiskMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.DiskMetrics, 6));
};


/**
 * @param {!Array<!proto.joblet.DiskMetrics>} value
 * @return {!proto.joblet.SystemStatusRes} returns this
*/
proto.joblet.SystemStatusRes.prototype.setDisksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.joblet.DiskMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.DiskMetrics}
 */
proto.joblet.SystemStatusRes.prototype.addDisks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.joblet.DiskMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.SystemStatusRes} returns this
 */
proto.joblet.SystemStatusRes.prototype.clearDisksList = function() {
  return this.setDisksList([]);
};


/**
 * repeated NetworkMetrics networks = 7;
 * @return {!Array<!proto.joblet.NetworkMetrics>}
 */
proto.joblet.SystemStatusRes.prototype.getNetworksList = function() {
  return /** @type{!Array<!proto.joblet.NetworkMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.NetworkMetrics, 7));
};


/**
 * @param {!Array<!proto.joblet.NetworkMetrics>} value
 * @return {!proto.joblet.SystemStatusRes} returns this
*/
proto.joblet.SystemStatusRes.prototype.setNetworksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.joblet.NetworkMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.NetworkMetrics}
 */
proto.joblet.SystemStatusRes.prototype.addNetworks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.joblet.NetworkMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.SystemStatusRes} returns this
 */
proto.joblet.SystemStatusRes.prototype.clearNetworksList = function() {
  return this.setNetworksList([]);
};


/**
 * optional IOMetrics io = 8;
 * @return {?proto.joblet.IOMetrics}
 */
proto.joblet.SystemStatusRes.prototype.getIo = function() {
  return /** @type{?proto.joblet.IOMetrics} */ (
    jspb.Message.getWrapperField(this, proto.joblet.IOMetrics, 8));
};


/**
 * @param {?proto.joblet.IOMetrics|undefined} value
 * @return {!proto.joblet.SystemStatusRes} returns this
*/
proto.joblet.SystemStatusRes.prototype.setIo = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemStatusRes} returns this
 */
proto.joblet.SystemStatusRes.prototype.clearIo = function() {
  return this.setIo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemStatusRes.prototype.hasIo = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ProcessMetrics processes = 9;
 * @return {?proto.joblet.ProcessMetrics}
 */
proto.joblet.SystemStatusRes.prototype.getProcesses = function() {
  return /** @type{?proto.joblet.ProcessMetrics} */ (
    jspb.Message.getWrapperField(this, proto.joblet.ProcessMetrics, 9));
};


/**
 * @param {?proto.joblet.ProcessMetrics|undefined} value
 * @return {!proto.joblet.SystemStatusRes} returns this
*/
proto.joblet.SystemStatusRes.prototype.setProcesses = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemStatusRes} returns this
 */
proto.joblet.SystemStatusRes.prototype.clearProcesses = function() {
  return this.setProcesses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemStatusRes.prototype.hasProcesses = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CloudInfo cloud = 10;
 * @return {?proto.joblet.CloudInfo}
 */
proto.joblet.SystemStatusRes.prototype.getCloud = function() {
  return /** @type{?proto.joblet.CloudInfo} */ (
    jspb.Message.getWrapperField(this, proto.joblet.CloudInfo, 10));
};


/**
 * @param {?proto.joblet.CloudInfo|undefined} value
 * @return {!proto.joblet.SystemStatusRes} returns this
*/
proto.joblet.SystemStatusRes.prototype.setCloud = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemStatusRes} returns this
 */
proto.joblet.SystemStatusRes.prototype.clearCloud = function() {
  return this.setCloud(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemStatusRes.prototype.hasCloud = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ServerVersionInfo server_version = 11;
 * @return {?proto.joblet.ServerVersionInfo}
 */
proto.joblet.SystemStatusRes.prototype.getServerVersion = function() {
  return /** @type{?proto.joblet.ServerVersionInfo} */ (
    jspb.Message.getWrapperField(this, proto.joblet.ServerVersionInfo, 11));
};


/**
 * @param {?proto.joblet.ServerVersionInfo|undefined} value
 * @return {!proto.joblet.SystemStatusRes} returns this
*/
proto.joblet.SystemStatusRes.prototype.setServerVersion = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemStatusRes} returns this
 */
proto.joblet.SystemStatusRes.prototype.clearServerVersion = function() {
  return this.setServerVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemStatusRes.prototype.hasServerVersion = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.SystemMetricsRes.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.SystemMetricsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.SystemMetricsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.SystemMetricsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.SystemMetricsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: (f = msg.getHost()) && proto.joblet.HostInfo.toObject(includeInstance, f),
    cpu: (f = msg.getCpu()) && proto.joblet.CPUMetrics.toObject(includeInstance, f),
    memory: (f = msg.getMemory()) && proto.joblet.MemoryMetrics.toObject(includeInstance, f),
    disksList: jspb.Message.toObjectList(msg.getDisksList(),
    proto.joblet.DiskMetrics.toObject, includeInstance),
    networksList: jspb.Message.toObjectList(msg.getNetworksList(),
    proto.joblet.NetworkMetrics.toObject, includeInstance),
    io: (f = msg.getIo()) && proto.joblet.IOMetrics.toObject(includeInstance, f),
    processes: (f = msg.getProcesses()) && proto.joblet.ProcessMetrics.toObject(includeInstance, f),
    cloud: (f = msg.getCloud()) && proto.joblet.CloudInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.SystemMetricsRes}
 */
proto.joblet.SystemMetricsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.SystemMetricsRes;
  return proto.joblet.SystemMetricsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.SystemMetricsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.SystemMetricsRes}
 */
proto.joblet.SystemMetricsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = new proto.joblet.HostInfo;
      reader.readMessage(value,proto.joblet.HostInfo.deserializeBinaryFromReader);
      msg.setHost(value);
      break;
    case 3:
      var value = new proto.joblet.CPUMetrics;
      reader.readMessage(value,proto.joblet.CPUMetrics.deserializeBinaryFromReader);
      msg.setCpu(value);
      break;
    case 4:
      var value = new proto.joblet.MemoryMetrics;
      reader.readMessage(value,proto.joblet.MemoryMetrics.deserializeBinaryFromReader);
      msg.setMemory(value);
      break;
    case 5:
      var value = new proto.joblet.DiskMetrics;
      reader.readMessage(value,proto.joblet.DiskMetrics.deserializeBinaryFromReader);
      msg.addDisks(value);
      break;
    case 6:
      var value = new proto.joblet.NetworkMetrics;
      reader.readMessage(value,proto.joblet.NetworkMetrics.deserializeBinaryFromReader);
      msg.addNetworks(value);
      break;
    case 7:
      var value = new proto.joblet.IOMetrics;
      reader.readMessage(value,proto.joblet.IOMetrics.deserializeBinaryFromReader);
      msg.setIo(value);
      break;
    case 8:
      var value = new proto.joblet.ProcessMetrics;
      reader.readMessage(value,proto.joblet.ProcessMetrics.deserializeBinaryFromReader);
      msg.setProcesses(value);
      break;
    case 9:
      var value = new proto.joblet.CloudInfo;
      reader.readMessage(value,proto.joblet.CloudInfo.deserializeBinaryFromReader);
      msg.setCloud(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.SystemMetricsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.SystemMetricsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.SystemMetricsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.SystemMetricsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.joblet.HostInfo.serializeBinaryToWriter
    );
  }
  f = message.getCpu();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.joblet.CPUMetrics.serializeBinaryToWriter
    );
  }
  f = message.getMemory();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.joblet.MemoryMetrics.serializeBinaryToWriter
    );
  }
  f = message.getDisksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.joblet.DiskMetrics.serializeBinaryToWriter
    );
  }
  f = message.getNetworksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.joblet.NetworkMetrics.serializeBinaryToWriter
    );
  }
  f = message.getIo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.joblet.IOMetrics.serializeBinaryToWriter
    );
  }
  f = message.getProcesses();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.joblet.ProcessMetrics.serializeBinaryToWriter
    );
  }
  f = message.getCloud();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.joblet.CloudInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string timestamp = 1;
 * @return {string}
 */
proto.joblet.SystemMetricsRes.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.SystemMetricsRes} returns this
 */
proto.joblet.SystemMetricsRes.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional HostInfo host = 2;
 * @return {?proto.joblet.HostInfo}
 */
proto.joblet.SystemMetricsRes.prototype.getHost = function() {
  return /** @type{?proto.joblet.HostInfo} */ (
    jspb.Message.getWrapperField(this, proto.joblet.HostInfo, 2));
};


/**
 * @param {?proto.joblet.HostInfo|undefined} value
 * @return {!proto.joblet.SystemMetricsRes} returns this
*/
proto.joblet.SystemMetricsRes.prototype.setHost = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemMetricsRes} returns this
 */
proto.joblet.SystemMetricsRes.prototype.clearHost = function() {
  return this.setHost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemMetricsRes.prototype.hasHost = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CPUMetrics cpu = 3;
 * @return {?proto.joblet.CPUMetrics}
 */
proto.joblet.SystemMetricsRes.prototype.getCpu = function() {
  return /** @type{?proto.joblet.CPUMetrics} */ (
    jspb.Message.getWrapperField(this, proto.joblet.CPUMetrics, 3));
};


/**
 * @param {?proto.joblet.CPUMetrics|undefined} value
 * @return {!proto.joblet.SystemMetricsRes} returns this
*/
proto.joblet.SystemMetricsRes.prototype.setCpu = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemMetricsRes} returns this
 */
proto.joblet.SystemMetricsRes.prototype.clearCpu = function() {
  return this.setCpu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemMetricsRes.prototype.hasCpu = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MemoryMetrics memory = 4;
 * @return {?proto.joblet.MemoryMetrics}
 */
proto.joblet.SystemMetricsRes.prototype.getMemory = function() {
  return /** @type{?proto.joblet.MemoryMetrics} */ (
    jspb.Message.getWrapperField(this, proto.joblet.MemoryMetrics, 4));
};


/**
 * @param {?proto.joblet.MemoryMetrics|undefined} value
 * @return {!proto.joblet.SystemMetricsRes} returns this
*/
proto.joblet.SystemMetricsRes.prototype.setMemory = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemMetricsRes} returns this
 */
proto.joblet.SystemMetricsRes.prototype.clearMemory = function() {
  return this.setMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemMetricsRes.prototype.hasMemory = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated DiskMetrics disks = 5;
 * @return {!Array<!proto.joblet.DiskMetrics>}
 */
proto.joblet.SystemMetricsRes.prototype.getDisksList = function() {
  return /** @type{!Array<!proto.joblet.DiskMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.DiskMetrics, 5));
};


/**
 * @param {!Array<!proto.joblet.DiskMetrics>} value
 * @return {!proto.joblet.SystemMetricsRes} returns this
*/
proto.joblet.SystemMetricsRes.prototype.setDisksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.joblet.DiskMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.DiskMetrics}
 */
proto.joblet.SystemMetricsRes.prototype.addDisks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.joblet.DiskMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.SystemMetricsRes} returns this
 */
proto.joblet.SystemMetricsRes.prototype.clearDisksList = function() {
  return this.setDisksList([]);
};


/**
 * repeated NetworkMetrics networks = 6;
 * @return {!Array<!proto.joblet.NetworkMetrics>}
 */
proto.joblet.SystemMetricsRes.prototype.getNetworksList = function() {
  return /** @type{!Array<!proto.joblet.NetworkMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.NetworkMetrics, 6));
};


/**
 * @param {!Array<!proto.joblet.NetworkMetrics>} value
 * @return {!proto.joblet.SystemMetricsRes} returns this
*/
proto.joblet.SystemMetricsRes.prototype.setNetworksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.joblet.NetworkMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.NetworkMetrics}
 */
proto.joblet.SystemMetricsRes.prototype.addNetworks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.joblet.NetworkMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.SystemMetricsRes} returns this
 */
proto.joblet.SystemMetricsRes.prototype.clearNetworksList = function() {
  return this.setNetworksList([]);
};


/**
 * optional IOMetrics io = 7;
 * @return {?proto.joblet.IOMetrics}
 */
proto.joblet.SystemMetricsRes.prototype.getIo = function() {
  return /** @type{?proto.joblet.IOMetrics} */ (
    jspb.Message.getWrapperField(this, proto.joblet.IOMetrics, 7));
};


/**
 * @param {?proto.joblet.IOMetrics|undefined} value
 * @return {!proto.joblet.SystemMetricsRes} returns this
*/
proto.joblet.SystemMetricsRes.prototype.setIo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemMetricsRes} returns this
 */
proto.joblet.SystemMetricsRes.prototype.clearIo = function() {
  return this.setIo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemMetricsRes.prototype.hasIo = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ProcessMetrics processes = 8;
 * @return {?proto.joblet.ProcessMetrics}
 */
proto.joblet.SystemMetricsRes.prototype.getProcesses = function() {
  return /** @type{?proto.joblet.ProcessMetrics} */ (
    jspb.Message.getWrapperField(this, proto.joblet.ProcessMetrics, 8));
};


/**
 * @param {?proto.joblet.ProcessMetrics|undefined} value
 * @return {!proto.joblet.SystemMetricsRes} returns this
*/
proto.joblet.SystemMetricsRes.prototype.setProcesses = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemMetricsRes} returns this
 */
proto.joblet.SystemMetricsRes.prototype.clearProcesses = function() {
  return this.setProcesses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemMetricsRes.prototype.hasProcesses = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CloudInfo cloud = 9;
 * @return {?proto.joblet.CloudInfo}
 */
proto.joblet.SystemMetricsRes.prototype.getCloud = function() {
  return /** @type{?proto.joblet.CloudInfo} */ (
    jspb.Message.getWrapperField(this, proto.joblet.CloudInfo, 9));
};


/**
 * @param {?proto.joblet.CloudInfo|undefined} value
 * @return {!proto.joblet.SystemMetricsRes} returns this
*/
proto.joblet.SystemMetricsRes.prototype.setCloud = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.SystemMetricsRes} returns this
 */
proto.joblet.SystemMetricsRes.prototype.clearCloud = function() {
  return this.setCloud(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.SystemMetricsRes.prototype.hasCloud = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.StreamMetricsReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.StreamMetricsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.StreamMetricsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.StreamMetricsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.StreamMetricsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    intervalseconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    metrictypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.StreamMetricsReq}
 */
proto.joblet.StreamMetricsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.StreamMetricsReq;
  return proto.joblet.StreamMetricsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.StreamMetricsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.StreamMetricsReq}
 */
proto.joblet.StreamMetricsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntervalseconds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addMetrictypes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.StreamMetricsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.StreamMetricsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.StreamMetricsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.StreamMetricsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntervalseconds();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMetrictypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional int32 intervalSeconds = 1;
 * @return {number}
 */
proto.joblet.StreamMetricsReq.prototype.getIntervalseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.StreamMetricsReq} returns this
 */
proto.joblet.StreamMetricsReq.prototype.setIntervalseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string metricTypes = 2;
 * @return {!Array<string>}
 */
proto.joblet.StreamMetricsReq.prototype.getMetrictypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.StreamMetricsReq} returns this
 */
proto.joblet.StreamMetricsReq.prototype.setMetrictypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.StreamMetricsReq} returns this
 */
proto.joblet.StreamMetricsReq.prototype.addMetrictypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.StreamMetricsReq} returns this
 */
proto.joblet.StreamMetricsReq.prototype.clearMetrictypesList = function() {
  return this.setMetrictypesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.HostInfo.repeatedFields_ = [14,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.HostInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.HostInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.HostInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.HostInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    os: jspb.Message.getFieldWithDefault(msg, 2, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 3, ""),
    platformfamily: jspb.Message.getFieldWithDefault(msg, 4, ""),
    platformversion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    kernelversion: jspb.Message.getFieldWithDefault(msg, 6, ""),
    kernelarch: jspb.Message.getFieldWithDefault(msg, 7, ""),
    architecture: jspb.Message.getFieldWithDefault(msg, 8, ""),
    cpucount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    totalmemory: jspb.Message.getFieldWithDefault(msg, 10, 0),
    boottime: jspb.Message.getFieldWithDefault(msg, 11, ""),
    uptime: jspb.Message.getFieldWithDefault(msg, 12, 0),
    nodeid: jspb.Message.getFieldWithDefault(msg, 13, ""),
    serveripsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
    macaddressesList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.HostInfo}
 */
proto.joblet.HostInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.HostInfo;
  return proto.joblet.HostInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.HostInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.HostInfo}
 */
proto.joblet.HostInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformfamily(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformversion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setKernelversion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setKernelarch(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setArchitecture(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCpucount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalmemory(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setBoottime(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUptime(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeid(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addServerips(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addMacaddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.HostInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.HostInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.HostInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.HostInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOs();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPlatformfamily();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPlatformversion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getKernelversion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getKernelarch();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getArchitecture();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCpucount();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getTotalmemory();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getBoottime();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getUptime();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getNodeid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getServeripsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getMacaddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
};


/**
 * optional string hostname = 1;
 * @return {string}
 */
proto.joblet.HostInfo.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string os = 2;
 * @return {string}
 */
proto.joblet.HostInfo.prototype.getOs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setOs = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string platform = 3;
 * @return {string}
 */
proto.joblet.HostInfo.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string platformFamily = 4;
 * @return {string}
 */
proto.joblet.HostInfo.prototype.getPlatformfamily = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setPlatformfamily = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string platformVersion = 5;
 * @return {string}
 */
proto.joblet.HostInfo.prototype.getPlatformversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setPlatformversion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string kernelVersion = 6;
 * @return {string}
 */
proto.joblet.HostInfo.prototype.getKernelversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setKernelversion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string kernelArch = 7;
 * @return {string}
 */
proto.joblet.HostInfo.prototype.getKernelarch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setKernelarch = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string architecture = 8;
 * @return {string}
 */
proto.joblet.HostInfo.prototype.getArchitecture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setArchitecture = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 cpuCount = 9;
 * @return {number}
 */
proto.joblet.HostInfo.prototype.getCpucount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setCpucount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 totalMemory = 10;
 * @return {number}
 */
proto.joblet.HostInfo.prototype.getTotalmemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setTotalmemory = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string bootTime = 11;
 * @return {string}
 */
proto.joblet.HostInfo.prototype.getBoottime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setBoottime = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int64 uptime = 12;
 * @return {number}
 */
proto.joblet.HostInfo.prototype.getUptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setUptime = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string nodeId = 13;
 * @return {string}
 */
proto.joblet.HostInfo.prototype.getNodeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setNodeid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * repeated string serverIPs = 14;
 * @return {!Array<string>}
 */
proto.joblet.HostInfo.prototype.getServeripsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setServeripsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.addServerips = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.clearServeripsList = function() {
  return this.setServeripsList([]);
};


/**
 * repeated string macAddresses = 15;
 * @return {!Array<string>}
 */
proto.joblet.HostInfo.prototype.getMacaddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.setMacaddressesList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.addMacaddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.HostInfo} returns this
 */
proto.joblet.HostInfo.prototype.clearMacaddressesList = function() {
  return this.setMacaddressesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.CPUMetrics.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.CPUMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.CPUMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.CPUMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CPUMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    cores: jspb.Message.getFieldWithDefault(msg, 1, 0),
    usagepercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    usertime: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    systemtime: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    idletime: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    iowaittime: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    stealtime: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    loadaverageList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 8)) == null ? undefined : f,
    percoreusageList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.CPUMetrics}
 */
proto.joblet.CPUMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.CPUMetrics;
  return proto.joblet.CPUMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.CPUMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.CPUMetrics}
 */
proto.joblet.CPUMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCores(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsagepercent(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsertime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSystemtime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setIdletime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setIowaittime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStealtime(value);
      break;
    case 8:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addLoadaverage(values[i]);
      }
      break;
    case 9:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPercoreusage(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.CPUMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.CPUMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.CPUMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CPUMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCores();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUsagepercent();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUsertime();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSystemtime();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getIdletime();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getIowaittime();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getStealtime();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getLoadaverageList();
  if (f.length > 0) {
    writer.writePackedDouble(
      8,
      f
    );
  }
  f = message.getPercoreusageList();
  if (f.length > 0) {
    writer.writePackedDouble(
      9,
      f
    );
  }
};


/**
 * optional int32 cores = 1;
 * @return {number}
 */
proto.joblet.CPUMetrics.prototype.getCores = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.setCores = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double usagePercent = 2;
 * @return {number}
 */
proto.joblet.CPUMetrics.prototype.getUsagepercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.setUsagepercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double userTime = 3;
 * @return {number}
 */
proto.joblet.CPUMetrics.prototype.getUsertime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.setUsertime = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double systemTime = 4;
 * @return {number}
 */
proto.joblet.CPUMetrics.prototype.getSystemtime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.setSystemtime = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double idleTime = 5;
 * @return {number}
 */
proto.joblet.CPUMetrics.prototype.getIdletime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.setIdletime = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double ioWaitTime = 6;
 * @return {number}
 */
proto.joblet.CPUMetrics.prototype.getIowaittime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.setIowaittime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double stealTime = 7;
 * @return {number}
 */
proto.joblet.CPUMetrics.prototype.getStealtime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.setStealtime = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * repeated double loadAverage = 8;
 * @return {!Array<number>}
 */
proto.joblet.CPUMetrics.prototype.getLoadaverageList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.setLoadaverageList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.addLoadaverage = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.clearLoadaverageList = function() {
  return this.setLoadaverageList([]);
};


/**
 * repeated double perCoreUsage = 9;
 * @return {!Array<number>}
 */
proto.joblet.CPUMetrics.prototype.getPercoreusageList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 9));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.setPercoreusageList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.addPercoreusage = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.CPUMetrics} returns this
 */
proto.joblet.CPUMetrics.prototype.clearPercoreusageList = function() {
  return this.setPercoreusageList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.MemoryMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.MemoryMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.MemoryMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.MemoryMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalbytes: jspb.Message.getFieldWithDefault(msg, 1, 0),
    usedbytes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    freebytes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    availablebytes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    usagepercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    cachedbytes: jspb.Message.getFieldWithDefault(msg, 6, 0),
    bufferedbytes: jspb.Message.getFieldWithDefault(msg, 7, 0),
    swaptotal: jspb.Message.getFieldWithDefault(msg, 8, 0),
    swapused: jspb.Message.getFieldWithDefault(msg, 9, 0),
    swapfree: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.MemoryMetrics}
 */
proto.joblet.MemoryMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.MemoryMetrics;
  return proto.joblet.MemoryMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.MemoryMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.MemoryMetrics}
 */
proto.joblet.MemoryMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalbytes(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsedbytes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFreebytes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvailablebytes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsagepercent(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCachedbytes(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBufferedbytes(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSwaptotal(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSwapused(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSwapfree(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.MemoryMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.MemoryMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.MemoryMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.MemoryMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalbytes();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUsedbytes();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFreebytes();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAvailablebytes();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getUsagepercent();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getCachedbytes();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getBufferedbytes();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getSwaptotal();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getSwapused();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getSwapfree();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * optional int64 totalBytes = 1;
 * @return {number}
 */
proto.joblet.MemoryMetrics.prototype.getTotalbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.MemoryMetrics} returns this
 */
proto.joblet.MemoryMetrics.prototype.setTotalbytes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 usedBytes = 2;
 * @return {number}
 */
proto.joblet.MemoryMetrics.prototype.getUsedbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.MemoryMetrics} returns this
 */
proto.joblet.MemoryMetrics.prototype.setUsedbytes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 freeBytes = 3;
 * @return {number}
 */
proto.joblet.MemoryMetrics.prototype.getFreebytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.MemoryMetrics} returns this
 */
proto.joblet.MemoryMetrics.prototype.setFreebytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 availableBytes = 4;
 * @return {number}
 */
proto.joblet.MemoryMetrics.prototype.getAvailablebytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.MemoryMetrics} returns this
 */
proto.joblet.MemoryMetrics.prototype.setAvailablebytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double usagePercent = 5;
 * @return {number}
 */
proto.joblet.MemoryMetrics.prototype.getUsagepercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.MemoryMetrics} returns this
 */
proto.joblet.MemoryMetrics.prototype.setUsagepercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 cachedBytes = 6;
 * @return {number}
 */
proto.joblet.MemoryMetrics.prototype.getCachedbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.MemoryMetrics} returns this
 */
proto.joblet.MemoryMetrics.prototype.setCachedbytes = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 bufferedBytes = 7;
 * @return {number}
 */
proto.joblet.MemoryMetrics.prototype.getBufferedbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.MemoryMetrics} returns this
 */
proto.joblet.MemoryMetrics.prototype.setBufferedbytes = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 swapTotal = 8;
 * @return {number}
 */
proto.joblet.MemoryMetrics.prototype.getSwaptotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.MemoryMetrics} returns this
 */
proto.joblet.MemoryMetrics.prototype.setSwaptotal = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 swapUsed = 9;
 * @return {number}
 */
proto.joblet.MemoryMetrics.prototype.getSwapused = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.MemoryMetrics} returns this
 */
proto.joblet.MemoryMetrics.prototype.setSwapused = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 swapFree = 10;
 * @return {number}
 */
proto.joblet.MemoryMetrics.prototype.getSwapfree = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.MemoryMetrics} returns this
 */
proto.joblet.MemoryMetrics.prototype.setSwapfree = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.DiskMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.DiskMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.DiskMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DiskMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mountpoint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    filesystem: jspb.Message.getFieldWithDefault(msg, 3, ""),
    totalbytes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    usedbytes: jspb.Message.getFieldWithDefault(msg, 5, 0),
    freebytes: jspb.Message.getFieldWithDefault(msg, 6, 0),
    usagepercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    inodestotal: jspb.Message.getFieldWithDefault(msg, 8, 0),
    inodesused: jspb.Message.getFieldWithDefault(msg, 9, 0),
    inodesfree: jspb.Message.getFieldWithDefault(msg, 10, 0),
    inodesusagepercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.DiskMetrics}
 */
proto.joblet.DiskMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.DiskMetrics;
  return proto.joblet.DiskMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.DiskMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.DiskMetrics}
 */
proto.joblet.DiskMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMountpoint(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilesystem(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalbytes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsedbytes(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFreebytes(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsagepercent(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInodestotal(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInodesused(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInodesfree(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInodesusagepercent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.DiskMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.DiskMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.DiskMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DiskMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMountpoint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFilesystem();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalbytes();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getUsedbytes();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getFreebytes();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getUsagepercent();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getInodestotal();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getInodesused();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getInodesfree();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getInodesusagepercent();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
};


/**
 * optional string device = 1;
 * @return {string}
 */
proto.joblet.DiskMetrics.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.DiskMetrics} returns this
 */
proto.joblet.DiskMetrics.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string mountPoint = 2;
 * @return {string}
 */
proto.joblet.DiskMetrics.prototype.getMountpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.DiskMetrics} returns this
 */
proto.joblet.DiskMetrics.prototype.setMountpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string filesystem = 3;
 * @return {string}
 */
proto.joblet.DiskMetrics.prototype.getFilesystem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.DiskMetrics} returns this
 */
proto.joblet.DiskMetrics.prototype.setFilesystem = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 totalBytes = 4;
 * @return {number}
 */
proto.joblet.DiskMetrics.prototype.getTotalbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskMetrics} returns this
 */
proto.joblet.DiskMetrics.prototype.setTotalbytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 usedBytes = 5;
 * @return {number}
 */
proto.joblet.DiskMetrics.prototype.getUsedbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskMetrics} returns this
 */
proto.joblet.DiskMetrics.prototype.setUsedbytes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 freeBytes = 6;
 * @return {number}
 */
proto.joblet.DiskMetrics.prototype.getFreebytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskMetrics} returns this
 */
proto.joblet.DiskMetrics.prototype.setFreebytes = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double usagePercent = 7;
 * @return {number}
 */
proto.joblet.DiskMetrics.prototype.getUsagepercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskMetrics} returns this
 */
proto.joblet.DiskMetrics.prototype.setUsagepercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int64 inodesTotal = 8;
 * @return {number}
 */
proto.joblet.DiskMetrics.prototype.getInodestotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskMetrics} returns this
 */
proto.joblet.DiskMetrics.prototype.setInodestotal = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 inodesUsed = 9;
 * @return {number}
 */
proto.joblet.DiskMetrics.prototype.getInodesused = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskMetrics} returns this
 */
proto.joblet.DiskMetrics.prototype.setInodesused = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 inodesFree = 10;
 * @return {number}
 */
proto.joblet.DiskMetrics.prototype.getInodesfree = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskMetrics} returns this
 */
proto.joblet.DiskMetrics.prototype.setInodesfree = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional double inodesUsagePercent = 11;
 * @return {number}
 */
proto.joblet.DiskMetrics.prototype.getInodesusagepercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskMetrics} returns this
 */
proto.joblet.DiskMetrics.prototype.setInodesusagepercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.NetworkMetrics.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.NetworkMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.NetworkMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.NetworkMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.NetworkMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_interface: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bytesreceived: jspb.Message.getFieldWithDefault(msg, 2, 0),
    bytessent: jspb.Message.getFieldWithDefault(msg, 3, 0),
    packetsreceived: jspb.Message.getFieldWithDefault(msg, 4, 0),
    packetssent: jspb.Message.getFieldWithDefault(msg, 5, 0),
    errorsin: jspb.Message.getFieldWithDefault(msg, 6, 0),
    errorsout: jspb.Message.getFieldWithDefault(msg, 7, 0),
    dropsin: jspb.Message.getFieldWithDefault(msg, 8, 0),
    dropsout: jspb.Message.getFieldWithDefault(msg, 9, 0),
    receiverate: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    transmitrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    ipaddressesList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    macaddress: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.NetworkMetrics}
 */
proto.joblet.NetworkMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.NetworkMetrics;
  return proto.joblet.NetworkMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.NetworkMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.NetworkMetrics}
 */
proto.joblet.NetworkMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInterface(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBytesreceived(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBytessent(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPacketsreceived(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPacketssent(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setErrorsin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setErrorsout(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDropsin(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDropsout(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setReceiverate(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTransmitrate(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addIpaddresses(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMacaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.NetworkMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.NetworkMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.NetworkMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.NetworkMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInterface();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBytesreceived();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getBytessent();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPacketsreceived();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getPacketssent();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getErrorsin();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getErrorsout();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getDropsin();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getDropsout();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getReceiverate();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getTransmitrate();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getIpaddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getMacaddress();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string interface = 1;
 * @return {string}
 */
proto.joblet.NetworkMetrics.prototype.getInterface = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setInterface = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 bytesReceived = 2;
 * @return {number}
 */
proto.joblet.NetworkMetrics.prototype.getBytesreceived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setBytesreceived = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 bytesSent = 3;
 * @return {number}
 */
proto.joblet.NetworkMetrics.prototype.getBytessent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setBytessent = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 packetsReceived = 4;
 * @return {number}
 */
proto.joblet.NetworkMetrics.prototype.getPacketsreceived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setPacketsreceived = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 packetsSent = 5;
 * @return {number}
 */
proto.joblet.NetworkMetrics.prototype.getPacketssent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setPacketssent = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 errorsIn = 6;
 * @return {number}
 */
proto.joblet.NetworkMetrics.prototype.getErrorsin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setErrorsin = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 errorsOut = 7;
 * @return {number}
 */
proto.joblet.NetworkMetrics.prototype.getErrorsout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setErrorsout = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 dropsIn = 8;
 * @return {number}
 */
proto.joblet.NetworkMetrics.prototype.getDropsin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setDropsin = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 dropsOut = 9;
 * @return {number}
 */
proto.joblet.NetworkMetrics.prototype.getDropsout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setDropsout = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional double receiveRate = 10;
 * @return {number}
 */
proto.joblet.NetworkMetrics.prototype.getReceiverate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setReceiverate = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double transmitRate = 11;
 * @return {number}
 */
proto.joblet.NetworkMetrics.prototype.getTransmitrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setTransmitrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * repeated string ipAddresses = 12;
 * @return {!Array<string>}
 */
proto.joblet.NetworkMetrics.prototype.getIpaddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setIpaddressesList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.addIpaddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.clearIpaddressesList = function() {
  return this.setIpaddressesList([]);
};


/**
 * optional string macAddress = 13;
 * @return {string}
 */
proto.joblet.NetworkMetrics.prototype.getMacaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.NetworkMetrics} returns this
 */
proto.joblet.NetworkMetrics.prototype.setMacaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.IOMetrics.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.IOMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.IOMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.IOMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.IOMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalreads: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalwrites: jspb.Message.getFieldWithDefault(msg, 2, 0),
    readbytes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    writebytes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    readrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    writerate: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    diskioList: jspb.Message.toObjectList(msg.getDiskioList(),
    proto.joblet.DiskIOMetrics.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.IOMetrics}
 */
proto.joblet.IOMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.IOMetrics;
  return proto.joblet.IOMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.IOMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.IOMetrics}
 */
proto.joblet.IOMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalreads(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalwrites(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReadbytes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWritebytes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setReadrate(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWriterate(value);
      break;
    case 7:
      var value = new proto.joblet.DiskIOMetrics;
      reader.readMessage(value,proto.joblet.DiskIOMetrics.deserializeBinaryFromReader);
      msg.addDiskio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.IOMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.IOMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.IOMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.IOMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalreads();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTotalwrites();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getReadbytes();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getWritebytes();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getReadrate();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getWriterate();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getDiskioList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.joblet.DiskIOMetrics.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 totalReads = 1;
 * @return {number}
 */
proto.joblet.IOMetrics.prototype.getTotalreads = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.IOMetrics} returns this
 */
proto.joblet.IOMetrics.prototype.setTotalreads = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 totalWrites = 2;
 * @return {number}
 */
proto.joblet.IOMetrics.prototype.getTotalwrites = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.IOMetrics} returns this
 */
proto.joblet.IOMetrics.prototype.setTotalwrites = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 readBytes = 3;
 * @return {number}
 */
proto.joblet.IOMetrics.prototype.getReadbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.IOMetrics} returns this
 */
proto.joblet.IOMetrics.prototype.setReadbytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 writeBytes = 4;
 * @return {number}
 */
proto.joblet.IOMetrics.prototype.getWritebytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.IOMetrics} returns this
 */
proto.joblet.IOMetrics.prototype.setWritebytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double readRate = 5;
 * @return {number}
 */
proto.joblet.IOMetrics.prototype.getReadrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.IOMetrics} returns this
 */
proto.joblet.IOMetrics.prototype.setReadrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double writeRate = 6;
 * @return {number}
 */
proto.joblet.IOMetrics.prototype.getWriterate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.IOMetrics} returns this
 */
proto.joblet.IOMetrics.prototype.setWriterate = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * repeated DiskIOMetrics diskIO = 7;
 * @return {!Array<!proto.joblet.DiskIOMetrics>}
 */
proto.joblet.IOMetrics.prototype.getDiskioList = function() {
  return /** @type{!Array<!proto.joblet.DiskIOMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.DiskIOMetrics, 7));
};


/**
 * @param {!Array<!proto.joblet.DiskIOMetrics>} value
 * @return {!proto.joblet.IOMetrics} returns this
*/
proto.joblet.IOMetrics.prototype.setDiskioList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.joblet.DiskIOMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.DiskIOMetrics}
 */
proto.joblet.IOMetrics.prototype.addDiskio = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.joblet.DiskIOMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.IOMetrics} returns this
 */
proto.joblet.IOMetrics.prototype.clearDiskioList = function() {
  return this.setDiskioList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.DiskIOMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.DiskIOMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.DiskIOMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DiskIOMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: jspb.Message.getFieldWithDefault(msg, 1, ""),
    readscompleted: jspb.Message.getFieldWithDefault(msg, 2, 0),
    writescompleted: jspb.Message.getFieldWithDefault(msg, 3, 0),
    readbytes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    writebytes: jspb.Message.getFieldWithDefault(msg, 5, 0),
    readtime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    writetime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    iotime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    utilization: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.DiskIOMetrics}
 */
proto.joblet.DiskIOMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.DiskIOMetrics;
  return proto.joblet.DiskIOMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.DiskIOMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.DiskIOMetrics}
 */
proto.joblet.DiskIOMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReadscompleted(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWritescompleted(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReadbytes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWritebytes(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReadtime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWritetime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIotime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUtilization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.DiskIOMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.DiskIOMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.DiskIOMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.DiskIOMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReadscompleted();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getWritescompleted();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getReadbytes();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getWritebytes();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getReadtime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getWritetime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getIotime();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getUtilization();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
};


/**
 * optional string device = 1;
 * @return {string}
 */
proto.joblet.DiskIOMetrics.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.DiskIOMetrics} returns this
 */
proto.joblet.DiskIOMetrics.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 readsCompleted = 2;
 * @return {number}
 */
proto.joblet.DiskIOMetrics.prototype.getReadscompleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskIOMetrics} returns this
 */
proto.joblet.DiskIOMetrics.prototype.setReadscompleted = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 writesCompleted = 3;
 * @return {number}
 */
proto.joblet.DiskIOMetrics.prototype.getWritescompleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskIOMetrics} returns this
 */
proto.joblet.DiskIOMetrics.prototype.setWritescompleted = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 readBytes = 4;
 * @return {number}
 */
proto.joblet.DiskIOMetrics.prototype.getReadbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskIOMetrics} returns this
 */
proto.joblet.DiskIOMetrics.prototype.setReadbytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 writeBytes = 5;
 * @return {number}
 */
proto.joblet.DiskIOMetrics.prototype.getWritebytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskIOMetrics} returns this
 */
proto.joblet.DiskIOMetrics.prototype.setWritebytes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 readTime = 6;
 * @return {number}
 */
proto.joblet.DiskIOMetrics.prototype.getReadtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskIOMetrics} returns this
 */
proto.joblet.DiskIOMetrics.prototype.setReadtime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 writeTime = 7;
 * @return {number}
 */
proto.joblet.DiskIOMetrics.prototype.getWritetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskIOMetrics} returns this
 */
proto.joblet.DiskIOMetrics.prototype.setWritetime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 ioTime = 8;
 * @return {number}
 */
proto.joblet.DiskIOMetrics.prototype.getIotime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskIOMetrics} returns this
 */
proto.joblet.DiskIOMetrics.prototype.setIotime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional double utilization = 9;
 * @return {number}
 */
proto.joblet.DiskIOMetrics.prototype.getUtilization = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.DiskIOMetrics} returns this
 */
proto.joblet.DiskIOMetrics.prototype.setUtilization = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.ProcessMetrics.repeatedFields_ = [7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.ProcessMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.ProcessMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.ProcessMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.ProcessMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalprocesses: jspb.Message.getFieldWithDefault(msg, 1, 0),
    runningprocesses: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sleepingprocesses: jspb.Message.getFieldWithDefault(msg, 3, 0),
    stoppedprocesses: jspb.Message.getFieldWithDefault(msg, 4, 0),
    zombieprocesses: jspb.Message.getFieldWithDefault(msg, 5, 0),
    totalthreads: jspb.Message.getFieldWithDefault(msg, 6, 0),
    topbycpuList: jspb.Message.toObjectList(msg.getTopbycpuList(),
    proto.joblet.ProcessInfo.toObject, includeInstance),
    topbymemoryList: jspb.Message.toObjectList(msg.getTopbymemoryList(),
    proto.joblet.ProcessInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.ProcessMetrics}
 */
proto.joblet.ProcessMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.ProcessMetrics;
  return proto.joblet.ProcessMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.ProcessMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.ProcessMetrics}
 */
proto.joblet.ProcessMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalprocesses(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRunningprocesses(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSleepingprocesses(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStoppedprocesses(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setZombieprocesses(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalthreads(value);
      break;
    case 7:
      var value = new proto.joblet.ProcessInfo;
      reader.readMessage(value,proto.joblet.ProcessInfo.deserializeBinaryFromReader);
      msg.addTopbycpu(value);
      break;
    case 8:
      var value = new proto.joblet.ProcessInfo;
      reader.readMessage(value,proto.joblet.ProcessInfo.deserializeBinaryFromReader);
      msg.addTopbymemory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.ProcessMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.ProcessMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.ProcessMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.ProcessMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalprocesses();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRunningprocesses();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSleepingprocesses();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStoppedprocesses();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getZombieprocesses();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTotalthreads();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getTopbycpuList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.joblet.ProcessInfo.serializeBinaryToWriter
    );
  }
  f = message.getTopbymemoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.joblet.ProcessInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 totalProcesses = 1;
 * @return {number}
 */
proto.joblet.ProcessMetrics.prototype.getTotalprocesses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.ProcessMetrics} returns this
 */
proto.joblet.ProcessMetrics.prototype.setTotalprocesses = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 runningProcesses = 2;
 * @return {number}
 */
proto.joblet.ProcessMetrics.prototype.getRunningprocesses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.ProcessMetrics} returns this
 */
proto.joblet.ProcessMetrics.prototype.setRunningprocesses = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 sleepingProcesses = 3;
 * @return {number}
 */
proto.joblet.ProcessMetrics.prototype.getSleepingprocesses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.ProcessMetrics} returns this
 */
proto.joblet.ProcessMetrics.prototype.setSleepingprocesses = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 stoppedProcesses = 4;
 * @return {number}
 */
proto.joblet.ProcessMetrics.prototype.getStoppedprocesses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.ProcessMetrics} returns this
 */
proto.joblet.ProcessMetrics.prototype.setStoppedprocesses = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 zombieProcesses = 5;
 * @return {number}
 */
proto.joblet.ProcessMetrics.prototype.getZombieprocesses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.ProcessMetrics} returns this
 */
proto.joblet.ProcessMetrics.prototype.setZombieprocesses = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 totalThreads = 6;
 * @return {number}
 */
proto.joblet.ProcessMetrics.prototype.getTotalthreads = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.ProcessMetrics} returns this
 */
proto.joblet.ProcessMetrics.prototype.setTotalthreads = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated ProcessInfo topByCPU = 7;
 * @return {!Array<!proto.joblet.ProcessInfo>}
 */
proto.joblet.ProcessMetrics.prototype.getTopbycpuList = function() {
  return /** @type{!Array<!proto.joblet.ProcessInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.ProcessInfo, 7));
};


/**
 * @param {!Array<!proto.joblet.ProcessInfo>} value
 * @return {!proto.joblet.ProcessMetrics} returns this
*/
proto.joblet.ProcessMetrics.prototype.setTopbycpuList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.joblet.ProcessInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.ProcessInfo}
 */
proto.joblet.ProcessMetrics.prototype.addTopbycpu = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.joblet.ProcessInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.ProcessMetrics} returns this
 */
proto.joblet.ProcessMetrics.prototype.clearTopbycpuList = function() {
  return this.setTopbycpuList([]);
};


/**
 * repeated ProcessInfo topByMemory = 8;
 * @return {!Array<!proto.joblet.ProcessInfo>}
 */
proto.joblet.ProcessMetrics.prototype.getTopbymemoryList = function() {
  return /** @type{!Array<!proto.joblet.ProcessInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.ProcessInfo, 8));
};


/**
 * @param {!Array<!proto.joblet.ProcessInfo>} value
 * @return {!proto.joblet.ProcessMetrics} returns this
*/
proto.joblet.ProcessMetrics.prototype.setTopbymemoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.joblet.ProcessInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.ProcessInfo}
 */
proto.joblet.ProcessMetrics.prototype.addTopbymemory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.joblet.ProcessInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.ProcessMetrics} returns this
 */
proto.joblet.ProcessMetrics.prototype.clearTopbymemoryList = function() {
  return this.setTopbymemoryList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.ProcessInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.ProcessInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.ProcessInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.ProcessInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ppid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    command: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cpupercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    memorypercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    memorybytes: jspb.Message.getFieldWithDefault(msg, 7, 0),
    status: jspb.Message.getFieldWithDefault(msg, 8, ""),
    starttime: jspb.Message.getFieldWithDefault(msg, 9, ""),
    user: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.ProcessInfo}
 */
proto.joblet.ProcessInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.ProcessInfo;
  return proto.joblet.ProcessInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.ProcessInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.ProcessInfo}
 */
proto.joblet.ProcessInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPpid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommand(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCpupercent(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMemorypercent(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemorybytes(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStarttime(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.ProcessInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.ProcessInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.ProcessInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.ProcessInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPpid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCommand();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCpupercent();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getMemorypercent();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getMemorybytes();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStarttime();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional int32 pid = 1;
 * @return {number}
 */
proto.joblet.ProcessInfo.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.ProcessInfo} returns this
 */
proto.joblet.ProcessInfo.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 ppid = 2;
 * @return {number}
 */
proto.joblet.ProcessInfo.prototype.getPpid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.ProcessInfo} returns this
 */
proto.joblet.ProcessInfo.prototype.setPpid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.joblet.ProcessInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ProcessInfo} returns this
 */
proto.joblet.ProcessInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string command = 4;
 * @return {string}
 */
proto.joblet.ProcessInfo.prototype.getCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ProcessInfo} returns this
 */
proto.joblet.ProcessInfo.prototype.setCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double cpuPercent = 5;
 * @return {number}
 */
proto.joblet.ProcessInfo.prototype.getCpupercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.ProcessInfo} returns this
 */
proto.joblet.ProcessInfo.prototype.setCpupercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double memoryPercent = 6;
 * @return {number}
 */
proto.joblet.ProcessInfo.prototype.getMemorypercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.ProcessInfo} returns this
 */
proto.joblet.ProcessInfo.prototype.setMemorypercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional int64 memoryBytes = 7;
 * @return {number}
 */
proto.joblet.ProcessInfo.prototype.getMemorybytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.ProcessInfo} returns this
 */
proto.joblet.ProcessInfo.prototype.setMemorybytes = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string status = 8;
 * @return {string}
 */
proto.joblet.ProcessInfo.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ProcessInfo} returns this
 */
proto.joblet.ProcessInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string startTime = 9;
 * @return {string}
 */
proto.joblet.ProcessInfo.prototype.getStarttime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ProcessInfo} returns this
 */
proto.joblet.ProcessInfo.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string user = 10;
 * @return {string}
 */
proto.joblet.ProcessInfo.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ProcessInfo} returns this
 */
proto.joblet.ProcessInfo.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.CloudInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.CloudInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.CloudInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CloudInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    provider: jspb.Message.getFieldWithDefault(msg, 1, ""),
    region: jspb.Message.getFieldWithDefault(msg, 2, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 3, ""),
    instanceid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    instancetype: jspb.Message.getFieldWithDefault(msg, 5, ""),
    hypervisortype: jspb.Message.getFieldWithDefault(msg, 6, ""),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.CloudInfo}
 */
proto.joblet.CloudInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.CloudInfo;
  return proto.joblet.CloudInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.CloudInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.CloudInfo}
 */
proto.joblet.CloudInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvider(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstancetype(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHypervisortype(value);
      break;
    case 7:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.CloudInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.CloudInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.CloudInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.CloudInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvider();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInstanceid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInstancetype();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHypervisortype();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string provider = 1;
 * @return {string}
 */
proto.joblet.CloudInfo.prototype.getProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CloudInfo} returns this
 */
proto.joblet.CloudInfo.prototype.setProvider = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string region = 2;
 * @return {string}
 */
proto.joblet.CloudInfo.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CloudInfo} returns this
 */
proto.joblet.CloudInfo.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string zone = 3;
 * @return {string}
 */
proto.joblet.CloudInfo.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CloudInfo} returns this
 */
proto.joblet.CloudInfo.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string instanceID = 4;
 * @return {string}
 */
proto.joblet.CloudInfo.prototype.getInstanceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CloudInfo} returns this
 */
proto.joblet.CloudInfo.prototype.setInstanceid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string instanceType = 5;
 * @return {string}
 */
proto.joblet.CloudInfo.prototype.getInstancetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CloudInfo} returns this
 */
proto.joblet.CloudInfo.prototype.setInstancetype = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string hypervisorType = 6;
 * @return {string}
 */
proto.joblet.CloudInfo.prototype.getHypervisortype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.CloudInfo} returns this
 */
proto.joblet.CloudInfo.prototype.setHypervisortype = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * map<string, string> metadata = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.joblet.CloudInfo.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.joblet.CloudInfo} returns this
 */
proto.joblet.CloudInfo.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.ServerVersionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.ServerVersionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.ServerVersionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.ServerVersionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gitCommit: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gitTag: jspb.Message.getFieldWithDefault(msg, 3, ""),
    buildDate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    component: jspb.Message.getFieldWithDefault(msg, 5, ""),
    goVersion: jspb.Message.getFieldWithDefault(msg, 6, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 7, ""),
    protoCommit: jspb.Message.getFieldWithDefault(msg, 8, ""),
    protoTag: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.ServerVersionInfo}
 */
proto.joblet.ServerVersionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.ServerVersionInfo;
  return proto.joblet.ServerVersionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.ServerVersionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.ServerVersionInfo}
 */
proto.joblet.ServerVersionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGitCommit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGitTag(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponent(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtoCommit(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtoTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.ServerVersionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.ServerVersionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.ServerVersionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.ServerVersionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGitCommit();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGitTag();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBuildDate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getComponent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getGoVersion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getProtoCommit();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getProtoTag();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.joblet.ServerVersionInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ServerVersionInfo} returns this
 */
proto.joblet.ServerVersionInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string git_commit = 2;
 * @return {string}
 */
proto.joblet.ServerVersionInfo.prototype.getGitCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ServerVersionInfo} returns this
 */
proto.joblet.ServerVersionInfo.prototype.setGitCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string git_tag = 3;
 * @return {string}
 */
proto.joblet.ServerVersionInfo.prototype.getGitTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ServerVersionInfo} returns this
 */
proto.joblet.ServerVersionInfo.prototype.setGitTag = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string build_date = 4;
 * @return {string}
 */
proto.joblet.ServerVersionInfo.prototype.getBuildDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ServerVersionInfo} returns this
 */
proto.joblet.ServerVersionInfo.prototype.setBuildDate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string component = 5;
 * @return {string}
 */
proto.joblet.ServerVersionInfo.prototype.getComponent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ServerVersionInfo} returns this
 */
proto.joblet.ServerVersionInfo.prototype.setComponent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string go_version = 6;
 * @return {string}
 */
proto.joblet.ServerVersionInfo.prototype.getGoVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ServerVersionInfo} returns this
 */
proto.joblet.ServerVersionInfo.prototype.setGoVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string platform = 7;
 * @return {string}
 */
proto.joblet.ServerVersionInfo.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ServerVersionInfo} returns this
 */
proto.joblet.ServerVersionInfo.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string proto_commit = 8;
 * @return {string}
 */
proto.joblet.ServerVersionInfo.prototype.getProtoCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ServerVersionInfo} returns this
 */
proto.joblet.ServerVersionInfo.prototype.setProtoCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string proto_tag = 9;
 * @return {string}
 */
proto.joblet.ServerVersionInfo.prototype.getProtoTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ServerVersionInfo} returns this
 */
proto.joblet.ServerVersionInfo.prototype.setProtoTag = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.RuntimesRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    runtimesList: jspb.Message.toObjectList(msg.getRuntimesList(),
    proto.joblet.RuntimeInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimesRes}
 */
proto.joblet.RuntimesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimesRes;
  return proto.joblet.RuntimesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimesRes}
 */
proto.joblet.RuntimesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.joblet.RuntimeInfo;
      reader.readMessage(value,proto.joblet.RuntimeInfo.deserializeBinaryFromReader);
      msg.addRuntimes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuntimesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.joblet.RuntimeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RuntimeInfo runtimes = 1;
 * @return {!Array<!proto.joblet.RuntimeInfo>}
 */
proto.joblet.RuntimesRes.prototype.getRuntimesList = function() {
  return /** @type{!Array<!proto.joblet.RuntimeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.RuntimeInfo, 1));
};


/**
 * @param {!Array<!proto.joblet.RuntimeInfo>} value
 * @return {!proto.joblet.RuntimesRes} returns this
*/
proto.joblet.RuntimesRes.prototype.setRuntimesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.joblet.RuntimeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.RuntimeInfo}
 */
proto.joblet.RuntimesRes.prototype.addRuntimes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.joblet.RuntimeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.RuntimesRes} returns this
 */
proto.joblet.RuntimesRes.prototype.clearRuntimesList = function() {
  return this.setRuntimesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.RuntimeInfo.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    language: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sizebytes: jspb.Message.getFieldWithDefault(msg, 5, 0),
    packagesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    available: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    requirements: (f = msg.getRequirements()) && proto.joblet.RuntimeRequirements.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeInfo}
 */
proto.joblet.RuntimeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeInfo;
  return proto.joblet.RuntimeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeInfo}
 */
proto.joblet.RuntimeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSizebytes(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addPackages(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAvailable(value);
      break;
    case 8:
      var value = new proto.joblet.RuntimeRequirements;
      reader.readMessage(value,proto.joblet.RuntimeRequirements.deserializeBinaryFromReader);
      msg.setRequirements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSizebytes();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getPackagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getAvailable();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getRequirements();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.joblet.RuntimeRequirements.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.joblet.RuntimeInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeInfo} returns this
 */
proto.joblet.RuntimeInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language = 2;
 * @return {string}
 */
proto.joblet.RuntimeInfo.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeInfo} returns this
 */
proto.joblet.RuntimeInfo.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.joblet.RuntimeInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeInfo} returns this
 */
proto.joblet.RuntimeInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.joblet.RuntimeInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeInfo} returns this
 */
proto.joblet.RuntimeInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 sizeBytes = 5;
 * @return {number}
 */
proto.joblet.RuntimeInfo.prototype.getSizebytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RuntimeInfo} returns this
 */
proto.joblet.RuntimeInfo.prototype.setSizebytes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated string packages = 6;
 * @return {!Array<string>}
 */
proto.joblet.RuntimeInfo.prototype.getPackagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.RuntimeInfo} returns this
 */
proto.joblet.RuntimeInfo.prototype.setPackagesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.RuntimeInfo} returns this
 */
proto.joblet.RuntimeInfo.prototype.addPackages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.RuntimeInfo} returns this
 */
proto.joblet.RuntimeInfo.prototype.clearPackagesList = function() {
  return this.setPackagesList([]);
};


/**
 * optional bool available = 7;
 * @return {boolean}
 */
proto.joblet.RuntimeInfo.prototype.getAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.RuntimeInfo} returns this
 */
proto.joblet.RuntimeInfo.prototype.setAvailable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional RuntimeRequirements requirements = 8;
 * @return {?proto.joblet.RuntimeRequirements}
 */
proto.joblet.RuntimeInfo.prototype.getRequirements = function() {
  return /** @type{?proto.joblet.RuntimeRequirements} */ (
    jspb.Message.getWrapperField(this, proto.joblet.RuntimeRequirements, 8));
};


/**
 * @param {?proto.joblet.RuntimeRequirements|undefined} value
 * @return {!proto.joblet.RuntimeInfo} returns this
*/
proto.joblet.RuntimeInfo.prototype.setRequirements = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.RuntimeInfo} returns this
 */
proto.joblet.RuntimeInfo.prototype.clearRequirements = function() {
  return this.setRequirements(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.RuntimeInfo.prototype.hasRequirements = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.RuntimeRequirements.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeRequirements.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeRequirements.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeRequirements} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeRequirements.toObject = function(includeInstance, msg) {
  var f, obj = {
    architecturesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    gpu: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeRequirements}
 */
proto.joblet.RuntimeRequirements.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeRequirements;
  return proto.joblet.RuntimeRequirements.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeRequirements} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeRequirements}
 */
proto.joblet.RuntimeRequirements.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addArchitectures(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGpu(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeRequirements.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeRequirements.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeRequirements} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeRequirements.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArchitecturesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getGpu();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated string architectures = 1;
 * @return {!Array<string>}
 */
proto.joblet.RuntimeRequirements.prototype.getArchitecturesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.RuntimeRequirements} returns this
 */
proto.joblet.RuntimeRequirements.prototype.setArchitecturesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.RuntimeRequirements} returns this
 */
proto.joblet.RuntimeRequirements.prototype.addArchitectures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.RuntimeRequirements} returns this
 */
proto.joblet.RuntimeRequirements.prototype.clearArchitecturesList = function() {
  return this.setArchitecturesList([]);
};


/**
 * optional bool gpu = 2;
 * @return {boolean}
 */
proto.joblet.RuntimeRequirements.prototype.getGpu = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.RuntimeRequirements} returns this
 */
proto.joblet.RuntimeRequirements.prototype.setGpu = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    runtime: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeInfoReq}
 */
proto.joblet.RuntimeInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeInfoReq;
  return proto.joblet.RuntimeInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeInfoReq}
 */
proto.joblet.RuntimeInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuntime();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string runtime = 1;
 * @return {string}
 */
proto.joblet.RuntimeInfoReq.prototype.getRuntime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeInfoReq} returns this
 */
proto.joblet.RuntimeInfoReq.prototype.setRuntime = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    runtime: (f = msg.getRuntime()) && proto.joblet.RuntimeInfo.toObject(includeInstance, f),
    found: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeInfoRes}
 */
proto.joblet.RuntimeInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeInfoRes;
  return proto.joblet.RuntimeInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeInfoRes}
 */
proto.joblet.RuntimeInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.joblet.RuntimeInfo;
      reader.readMessage(value,proto.joblet.RuntimeInfo.deserializeBinaryFromReader);
      msg.setRuntime(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFound(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuntime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.joblet.RuntimeInfo.serializeBinaryToWriter
    );
  }
  f = message.getFound();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional RuntimeInfo runtime = 1;
 * @return {?proto.joblet.RuntimeInfo}
 */
proto.joblet.RuntimeInfoRes.prototype.getRuntime = function() {
  return /** @type{?proto.joblet.RuntimeInfo} */ (
    jspb.Message.getWrapperField(this, proto.joblet.RuntimeInfo, 1));
};


/**
 * @param {?proto.joblet.RuntimeInfo|undefined} value
 * @return {!proto.joblet.RuntimeInfoRes} returns this
*/
proto.joblet.RuntimeInfoRes.prototype.setRuntime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.RuntimeInfoRes} returns this
 */
proto.joblet.RuntimeInfoRes.prototype.clearRuntime = function() {
  return this.setRuntime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.RuntimeInfoRes.prototype.hasRuntime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool found = 2;
 * @return {boolean}
 */
proto.joblet.RuntimeInfoRes.prototype.getFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.RuntimeInfoRes} returns this
 */
proto.joblet.RuntimeInfoRes.prototype.setFound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeTestReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeTestReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeTestReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeTestReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    runtime: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeTestReq}
 */
proto.joblet.RuntimeTestReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeTestReq;
  return proto.joblet.RuntimeTestReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeTestReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeTestReq}
 */
proto.joblet.RuntimeTestReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeTestReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeTestReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeTestReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeTestReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuntime();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string runtime = 1;
 * @return {string}
 */
proto.joblet.RuntimeTestReq.prototype.getRuntime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeTestReq} returns this
 */
proto.joblet.RuntimeTestReq.prototype.setRuntime = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeTestRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeTestRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeTestRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeTestRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    output: jspb.Message.getFieldWithDefault(msg, 3, ""),
    error: jspb.Message.getFieldWithDefault(msg, 4, ""),
    exitcode: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeTestRes}
 */
proto.joblet.RuntimeTestRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeTestRes;
  return proto.joblet.RuntimeTestRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeTestRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeTestRes}
 */
proto.joblet.RuntimeTestRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutput(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExitcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeTestRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeTestRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeTestRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeTestRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getOutput();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExitcode();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.joblet.RuntimeTestRes.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.RuntimeTestRes} returns this
 */
proto.joblet.RuntimeTestRes.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string output = 3;
 * @return {string}
 */
proto.joblet.RuntimeTestRes.prototype.getOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeTestRes} returns this
 */
proto.joblet.RuntimeTestRes.prototype.setOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string error = 4;
 * @return {string}
 */
proto.joblet.RuntimeTestRes.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeTestRes} returns this
 */
proto.joblet.RuntimeTestRes.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 exitCode = 5;
 * @return {number}
 */
proto.joblet.RuntimeTestRes.prototype.getExitcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RuntimeTestRes} returns this
 */
proto.joblet.RuntimeTestRes.prototype.setExitcode = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.RunJobRequest.repeatedFields_ = [3,8,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RunJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RunJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RunJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RunJobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    command: jspb.Message.getFieldWithDefault(msg, 2, ""),
    argsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    maxcpu: jspb.Message.getFieldWithDefault(msg, 4, 0),
    cpucores: jspb.Message.getFieldWithDefault(msg, 5, ""),
    maxmemory: jspb.Message.getFieldWithDefault(msg, 6, 0),
    maxiobps: jspb.Message.getFieldWithDefault(msg, 7, 0),
    uploadsList: jspb.Message.toObjectList(msg.getUploadsList(),
    proto.joblet.FileUpload.toObject, includeInstance),
    schedule: jspb.Message.getFieldWithDefault(msg, 9, ""),
    network: jspb.Message.getFieldWithDefault(msg, 10, ""),
    volumesList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    runtime: jspb.Message.getFieldWithDefault(msg, 12, ""),
    workdir: jspb.Message.getFieldWithDefault(msg, 13, ""),
    environmentMap: (f = msg.getEnvironmentMap()) ? f.toObject(includeInstance, undefined) : [],
    secretEnvironmentMap: (f = msg.getSecretEnvironmentMap()) ? f.toObject(includeInstance, undefined) : [],
    gpuCount: jspb.Message.getFieldWithDefault(msg, 19, 0),
    gpuMemoryMb: jspb.Message.getFieldWithDefault(msg, 20, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RunJobRequest}
 */
proto.joblet.RunJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RunJobRequest;
  return proto.joblet.RunJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RunJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RunJobRequest}
 */
proto.joblet.RunJobRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommand(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxcpu(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCpucores(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxmemory(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxiobps(value);
      break;
    case 8:
      var value = new proto.joblet.FileUpload;
      reader.readMessage(value,proto.joblet.FileUpload.deserializeBinaryFromReader);
      msg.addUploads(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchedule(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addVolumes(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntime(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkdir(value);
      break;
    case 14:
      var value = msg.getEnvironmentMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 18:
      var value = msg.getSecretEnvironmentMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGpuCount(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGpuMemoryMb(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RunJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RunJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RunJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RunJobRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommand();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getMaxcpu();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getCpucores();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMaxmemory();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getMaxiobps();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getUploadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.joblet.FileUpload.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getNetwork();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getVolumesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getRuntime();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getWorkdir();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getEnvironmentMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(14, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSecretEnvironmentMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(18, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getGpuCount();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getGpuMemoryMb();
  if (f !== 0) {
    writer.writeInt32(
      20,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.joblet.RunJobRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string command = 2;
 * @return {string}
 */
proto.joblet.RunJobRequest.prototype.getCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string args = 3;
 * @return {!Array<string>}
 */
proto.joblet.RunJobRequest.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * optional int32 maxCpu = 4;
 * @return {number}
 */
proto.joblet.RunJobRequest.prototype.getMaxcpu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setMaxcpu = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string cpuCores = 5;
 * @return {string}
 */
proto.joblet.RunJobRequest.prototype.getCpucores = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setCpucores = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 maxMemory = 6;
 * @return {number}
 */
proto.joblet.RunJobRequest.prototype.getMaxmemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setMaxmemory = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 maxIobps = 7;
 * @return {number}
 */
proto.joblet.RunJobRequest.prototype.getMaxiobps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setMaxiobps = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated FileUpload uploads = 8;
 * @return {!Array<!proto.joblet.FileUpload>}
 */
proto.joblet.RunJobRequest.prototype.getUploadsList = function() {
  return /** @type{!Array<!proto.joblet.FileUpload>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.FileUpload, 8));
};


/**
 * @param {!Array<!proto.joblet.FileUpload>} value
 * @return {!proto.joblet.RunJobRequest} returns this
*/
proto.joblet.RunJobRequest.prototype.setUploadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.joblet.FileUpload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.FileUpload}
 */
proto.joblet.RunJobRequest.prototype.addUploads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.joblet.FileUpload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.clearUploadsList = function() {
  return this.setUploadsList([]);
};


/**
 * optional string schedule = 9;
 * @return {string}
 */
proto.joblet.RunJobRequest.prototype.getSchedule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setSchedule = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string network = 10;
 * @return {string}
 */
proto.joblet.RunJobRequest.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string volumes = 11;
 * @return {!Array<string>}
 */
proto.joblet.RunJobRequest.prototype.getVolumesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setVolumesList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.addVolumes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.clearVolumesList = function() {
  return this.setVolumesList([]);
};


/**
 * optional string runtime = 12;
 * @return {string}
 */
proto.joblet.RunJobRequest.prototype.getRuntime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setRuntime = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string workDir = 13;
 * @return {string}
 */
proto.joblet.RunJobRequest.prototype.getWorkdir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setWorkdir = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * map<string, string> environment = 14;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.joblet.RunJobRequest.prototype.getEnvironmentMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 14, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.clearEnvironmentMap = function() {
  this.getEnvironmentMap().clear();
  return this;};


/**
 * map<string, string> secret_environment = 18;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.joblet.RunJobRequest.prototype.getSecretEnvironmentMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 18, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.clearSecretEnvironmentMap = function() {
  this.getSecretEnvironmentMap().clear();
  return this;};


/**
 * optional int32 gpu_count = 19;
 * @return {number}
 */
proto.joblet.RunJobRequest.prototype.getGpuCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setGpuCount = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int32 gpu_memory_mb = 20;
 * @return {number}
 */
proto.joblet.RunJobRequest.prototype.getGpuMemoryMb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RunJobRequest} returns this
 */
proto.joblet.RunJobRequest.prototype.setGpuMemoryMb = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.RunJobResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RunJobResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RunJobResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RunJobResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RunJobResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, ""),
    command: jspb.Message.getFieldWithDefault(msg, 3, ""),
    argsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    maxcpu: jspb.Message.getFieldWithDefault(msg, 5, 0),
    cpucores: jspb.Message.getFieldWithDefault(msg, 6, ""),
    maxmemory: jspb.Message.getFieldWithDefault(msg, 7, 0),
    maxiobps: jspb.Message.getFieldWithDefault(msg, 8, 0),
    starttime: jspb.Message.getFieldWithDefault(msg, 9, ""),
    endtime: jspb.Message.getFieldWithDefault(msg, 10, ""),
    exitcode: jspb.Message.getFieldWithDefault(msg, 11, 0),
    scheduledtime: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RunJobResponse}
 */
proto.joblet.RunJobResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RunJobResponse;
  return proto.joblet.RunJobResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RunJobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RunJobResponse}
 */
proto.joblet.RunJobResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommand(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxcpu(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCpucores(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxmemory(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxiobps(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStarttime(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndtime(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExitcode(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setScheduledtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RunJobResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RunJobResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RunJobResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RunJobResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommand();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getMaxcpu();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCpucores();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMaxmemory();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getMaxiobps();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getStarttime();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getEndtime();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getExitcode();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getScheduledtime();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string jobUuid = 1;
 * @return {string}
 */
proto.joblet.RunJobResponse.prototype.getJobuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setJobuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.joblet.RunJobResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string command = 3;
 * @return {string}
 */
proto.joblet.RunJobResponse.prototype.getCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string args = 4;
 * @return {!Array<string>}
 */
proto.joblet.RunJobResponse.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * optional int32 maxCpu = 5;
 * @return {number}
 */
proto.joblet.RunJobResponse.prototype.getMaxcpu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setMaxcpu = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string cpuCores = 6;
 * @return {string}
 */
proto.joblet.RunJobResponse.prototype.getCpucores = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setCpucores = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 maxMemory = 7;
 * @return {number}
 */
proto.joblet.RunJobResponse.prototype.getMaxmemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setMaxmemory = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 maxIobps = 8;
 * @return {number}
 */
proto.joblet.RunJobResponse.prototype.getMaxiobps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setMaxiobps = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string startTime = 9;
 * @return {string}
 */
proto.joblet.RunJobResponse.prototype.getStarttime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string endTime = 10;
 * @return {string}
 */
proto.joblet.RunJobResponse.prototype.getEndtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 exitCode = 11;
 * @return {number}
 */
proto.joblet.RunJobResponse.prototype.getExitcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setExitcode = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string scheduledTime = 12;
 * @return {string}
 */
proto.joblet.RunJobResponse.prototype.getScheduledtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RunJobResponse} returns this
 */
proto.joblet.RunJobResponse.prototype.setScheduledtime = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Timestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    seconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nanos: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.Timestamp}
 */
proto.joblet.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.Timestamp;
  return proto.joblet.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.Timestamp}
 */
proto.joblet.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.Timestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.Timestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeconds();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNanos();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 seconds = 1;
 * @return {number}
 */
proto.joblet.Timestamp.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.Timestamp} returns this
 */
proto.joblet.Timestamp.prototype.setSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.joblet.Timestamp.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.Timestamp} returns this
 */
proto.joblet.Timestamp.prototype.setNanos = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.InstallRuntimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.InstallRuntimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.InstallRuntimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.InstallRuntimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    runtimespec: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repository: jspb.Message.getFieldWithDefault(msg, 2, ""),
    branch: jspb.Message.getFieldWithDefault(msg, 3, ""),
    path: jspb.Message.getFieldWithDefault(msg, 4, ""),
    forcereinstall: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    registryUrl: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.InstallRuntimeRequest}
 */
proto.joblet.InstallRuntimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.InstallRuntimeRequest;
  return proto.joblet.InstallRuntimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.InstallRuntimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.InstallRuntimeRequest}
 */
proto.joblet.InstallRuntimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntimespec(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepository(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForcereinstall(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistryUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.InstallRuntimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.InstallRuntimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.InstallRuntimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.InstallRuntimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuntimespec();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepository();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBranch();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getForcereinstall();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRegistryUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string runtimeSpec = 1;
 * @return {string}
 */
proto.joblet.InstallRuntimeRequest.prototype.getRuntimespec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeRequest} returns this
 */
proto.joblet.InstallRuntimeRequest.prototype.setRuntimespec = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repository = 2;
 * @return {string}
 */
proto.joblet.InstallRuntimeRequest.prototype.getRepository = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeRequest} returns this
 */
proto.joblet.InstallRuntimeRequest.prototype.setRepository = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string branch = 3;
 * @return {string}
 */
proto.joblet.InstallRuntimeRequest.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeRequest} returns this
 */
proto.joblet.InstallRuntimeRequest.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string path = 4;
 * @return {string}
 */
proto.joblet.InstallRuntimeRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeRequest} returns this
 */
proto.joblet.InstallRuntimeRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool forceReinstall = 5;
 * @return {boolean}
 */
proto.joblet.InstallRuntimeRequest.prototype.getForcereinstall = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.InstallRuntimeRequest} returns this
 */
proto.joblet.InstallRuntimeRequest.prototype.setForcereinstall = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string registry_url = 6;
 * @return {string}
 */
proto.joblet.InstallRuntimeRequest.prototype.getRegistryUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeRequest} returns this
 */
proto.joblet.InstallRuntimeRequest.prototype.setRegistryUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.InstallRuntimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.InstallRuntimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.InstallRuntimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.InstallRuntimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    buildjobuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    runtimespec: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, ""),
    message: jspb.Message.getFieldWithDefault(msg, 4, ""),
    repository: jspb.Message.getFieldWithDefault(msg, 5, ""),
    resolvedpath: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.InstallRuntimeResponse}
 */
proto.joblet.InstallRuntimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.InstallRuntimeResponse;
  return proto.joblet.InstallRuntimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.InstallRuntimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.InstallRuntimeResponse}
 */
proto.joblet.InstallRuntimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildjobuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntimespec(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepository(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setResolvedpath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.InstallRuntimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.InstallRuntimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.InstallRuntimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.InstallRuntimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuildjobuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRuntimespec();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRepository();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getResolvedpath();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string buildJobUuid = 1;
 * @return {string}
 */
proto.joblet.InstallRuntimeResponse.prototype.getBuildjobuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeResponse} returns this
 */
proto.joblet.InstallRuntimeResponse.prototype.setBuildjobuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string runtimeSpec = 2;
 * @return {string}
 */
proto.joblet.InstallRuntimeResponse.prototype.getRuntimespec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeResponse} returns this
 */
proto.joblet.InstallRuntimeResponse.prototype.setRuntimespec = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.joblet.InstallRuntimeResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeResponse} returns this
 */
proto.joblet.InstallRuntimeResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.joblet.InstallRuntimeResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeResponse} returns this
 */
proto.joblet.InstallRuntimeResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string repository = 5;
 * @return {string}
 */
proto.joblet.InstallRuntimeResponse.prototype.getRepository = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeResponse} returns this
 */
proto.joblet.InstallRuntimeResponse.prototype.setRepository = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string resolvedPath = 6;
 * @return {string}
 */
proto.joblet.InstallRuntimeResponse.prototype.getResolvedpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeResponse} returns this
 */
proto.joblet.InstallRuntimeResponse.prototype.setResolvedpath = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.InstallRuntimeFromLocalRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.InstallRuntimeFromLocalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.InstallRuntimeFromLocalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.InstallRuntimeFromLocalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.InstallRuntimeFromLocalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    runtimespec: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filesList: jspb.Message.toObjectList(msg.getFilesList(),
    proto.joblet.RuntimeFile.toObject, includeInstance),
    forcereinstall: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.InstallRuntimeFromLocalRequest}
 */
proto.joblet.InstallRuntimeFromLocalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.InstallRuntimeFromLocalRequest;
  return proto.joblet.InstallRuntimeFromLocalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.InstallRuntimeFromLocalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.InstallRuntimeFromLocalRequest}
 */
proto.joblet.InstallRuntimeFromLocalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntimespec(value);
      break;
    case 2:
      var value = new proto.joblet.RuntimeFile;
      reader.readMessage(value,proto.joblet.RuntimeFile.deserializeBinaryFromReader);
      msg.addFiles(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForcereinstall(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.InstallRuntimeFromLocalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.InstallRuntimeFromLocalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.InstallRuntimeFromLocalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.InstallRuntimeFromLocalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuntimespec();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.joblet.RuntimeFile.serializeBinaryToWriter
    );
  }
  f = message.getForcereinstall();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string runtimeSpec = 1;
 * @return {string}
 */
proto.joblet.InstallRuntimeFromLocalRequest.prototype.getRuntimespec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.InstallRuntimeFromLocalRequest} returns this
 */
proto.joblet.InstallRuntimeFromLocalRequest.prototype.setRuntimespec = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated RuntimeFile files = 2;
 * @return {!Array<!proto.joblet.RuntimeFile>}
 */
proto.joblet.InstallRuntimeFromLocalRequest.prototype.getFilesList = function() {
  return /** @type{!Array<!proto.joblet.RuntimeFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.joblet.RuntimeFile, 2));
};


/**
 * @param {!Array<!proto.joblet.RuntimeFile>} value
 * @return {!proto.joblet.InstallRuntimeFromLocalRequest} returns this
*/
proto.joblet.InstallRuntimeFromLocalRequest.prototype.setFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.joblet.RuntimeFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.joblet.RuntimeFile}
 */
proto.joblet.InstallRuntimeFromLocalRequest.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.joblet.RuntimeFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.InstallRuntimeFromLocalRequest} returns this
 */
proto.joblet.InstallRuntimeFromLocalRequest.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};


/**
 * optional bool forceReinstall = 3;
 * @return {boolean}
 */
proto.joblet.InstallRuntimeFromLocalRequest.prototype.getForcereinstall = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.InstallRuntimeFromLocalRequest} returns this
 */
proto.joblet.InstallRuntimeFromLocalRequest.prototype.setForcereinstall = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeFile.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: msg.getContent_asB64(),
    executable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeFile}
 */
proto.joblet.RuntimeFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeFile;
  return proto.joblet.RuntimeFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeFile}
 */
proto.joblet.RuntimeFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExecutable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getExecutable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.joblet.RuntimeFile.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeFile} returns this
 */
proto.joblet.RuntimeFile.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes content = 2;
 * @return {!(string|Uint8Array)}
 */
proto.joblet.RuntimeFile.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes content = 2;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.joblet.RuntimeFile.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeFile.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.joblet.RuntimeFile} returns this
 */
proto.joblet.RuntimeFile.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool executable = 3;
 * @return {boolean}
 */
proto.joblet.RuntimeFile.prototype.getExecutable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.RuntimeFile} returns this
 */
proto.joblet.RuntimeFile.prototype.setExecutable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.ValidateRuntimeSpecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.ValidateRuntimeSpecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.ValidateRuntimeSpecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.ValidateRuntimeSpecRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    runtimespec: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.ValidateRuntimeSpecRequest}
 */
proto.joblet.ValidateRuntimeSpecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.ValidateRuntimeSpecRequest;
  return proto.joblet.ValidateRuntimeSpecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.ValidateRuntimeSpecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.ValidateRuntimeSpecRequest}
 */
proto.joblet.ValidateRuntimeSpecRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntimespec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.ValidateRuntimeSpecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.ValidateRuntimeSpecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.ValidateRuntimeSpecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.ValidateRuntimeSpecRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuntimespec();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string runtimeSpec = 1;
 * @return {string}
 */
proto.joblet.ValidateRuntimeSpecRequest.prototype.getRuntimespec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ValidateRuntimeSpecRequest} returns this
 */
proto.joblet.ValidateRuntimeSpecRequest.prototype.setRuntimespec = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.ValidateRuntimeSpecResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.ValidateRuntimeSpecResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.ValidateRuntimeSpecResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.ValidateRuntimeSpecResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valid: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    normalizedspec: jspb.Message.getFieldWithDefault(msg, 3, ""),
    specinfo: (f = msg.getSpecinfo()) && proto.joblet.RuntimeSpecInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.ValidateRuntimeSpecResponse}
 */
proto.joblet.ValidateRuntimeSpecResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.ValidateRuntimeSpecResponse;
  return proto.joblet.ValidateRuntimeSpecResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.ValidateRuntimeSpecResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.ValidateRuntimeSpecResponse}
 */
proto.joblet.ValidateRuntimeSpecResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNormalizedspec(value);
      break;
    case 4:
      var value = new proto.joblet.RuntimeSpecInfo;
      reader.readMessage(value,proto.joblet.RuntimeSpecInfo.deserializeBinaryFromReader);
      msg.setSpecinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.ValidateRuntimeSpecResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.ValidateRuntimeSpecResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.ValidateRuntimeSpecResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.ValidateRuntimeSpecResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValid();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNormalizedspec();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSpecinfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.joblet.RuntimeSpecInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool valid = 1;
 * @return {boolean}
 */
proto.joblet.ValidateRuntimeSpecResponse.prototype.getValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.ValidateRuntimeSpecResponse} returns this
 */
proto.joblet.ValidateRuntimeSpecResponse.prototype.setValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.joblet.ValidateRuntimeSpecResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ValidateRuntimeSpecResponse} returns this
 */
proto.joblet.ValidateRuntimeSpecResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string normalizedSpec = 3;
 * @return {string}
 */
proto.joblet.ValidateRuntimeSpecResponse.prototype.getNormalizedspec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.ValidateRuntimeSpecResponse} returns this
 */
proto.joblet.ValidateRuntimeSpecResponse.prototype.setNormalizedspec = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RuntimeSpecInfo specInfo = 4;
 * @return {?proto.joblet.RuntimeSpecInfo}
 */
proto.joblet.ValidateRuntimeSpecResponse.prototype.getSpecinfo = function() {
  return /** @type{?proto.joblet.RuntimeSpecInfo} */ (
    jspb.Message.getWrapperField(this, proto.joblet.RuntimeSpecInfo, 4));
};


/**
 * @param {?proto.joblet.RuntimeSpecInfo|undefined} value
 * @return {!proto.joblet.ValidateRuntimeSpecResponse} returns this
*/
proto.joblet.ValidateRuntimeSpecResponse.prototype.setSpecinfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.ValidateRuntimeSpecResponse} returns this
 */
proto.joblet.ValidateRuntimeSpecResponse.prototype.clearSpecinfo = function() {
  return this.setSpecinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.ValidateRuntimeSpecResponse.prototype.hasSpecinfo = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeRemoveReq.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeRemoveReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeRemoveReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeRemoveReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    runtime: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeRemoveReq}
 */
proto.joblet.RuntimeRemoveReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeRemoveReq;
  return proto.joblet.RuntimeRemoveReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeRemoveReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeRemoveReq}
 */
proto.joblet.RuntimeRemoveReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeRemoveReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeRemoveReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeRemoveReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeRemoveReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuntime();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string runtime = 1;
 * @return {string}
 */
proto.joblet.RuntimeRemoveReq.prototype.getRuntime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeRemoveReq} returns this
 */
proto.joblet.RuntimeRemoveReq.prototype.setRuntime = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeRemoveRes.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeRemoveRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeRemoveRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeRemoveRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    freedspacebytes: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeRemoveRes}
 */
proto.joblet.RuntimeRemoveRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeRemoveRes;
  return proto.joblet.RuntimeRemoveRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeRemoveRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeRemoveRes}
 */
proto.joblet.RuntimeRemoveRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFreedspacebytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeRemoveRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeRemoveRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeRemoveRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeRemoveRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFreedspacebytes();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.joblet.RuntimeRemoveRes.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.joblet.RuntimeRemoveRes} returns this
 */
proto.joblet.RuntimeRemoveRes.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.joblet.RuntimeRemoveRes.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeRemoveRes} returns this
 */
proto.joblet.RuntimeRemoveRes.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 freedSpaceBytes = 3;
 * @return {number}
 */
proto.joblet.RuntimeRemoveRes.prototype.getFreedspacebytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.RuntimeRemoveRes} returns this
 */
proto.joblet.RuntimeRemoveRes.prototype.setFreedspacebytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.RuntimeSpecInfo.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.RuntimeSpecInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.RuntimeSpecInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.RuntimeSpecInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeSpecInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    language: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    variantsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    architecture: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.RuntimeSpecInfo}
 */
proto.joblet.RuntimeSpecInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.RuntimeSpecInfo;
  return proto.joblet.RuntimeSpecInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.RuntimeSpecInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.RuntimeSpecInfo}
 */
proto.joblet.RuntimeSpecInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addVariants(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setArchitecture(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.RuntimeSpecInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.RuntimeSpecInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.RuntimeSpecInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.RuntimeSpecInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVariantsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getArchitecture();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string language = 1;
 * @return {string}
 */
proto.joblet.RuntimeSpecInfo.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeSpecInfo} returns this
 */
proto.joblet.RuntimeSpecInfo.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.joblet.RuntimeSpecInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeSpecInfo} returns this
 */
proto.joblet.RuntimeSpecInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string variants = 3;
 * @return {!Array<string>}
 */
proto.joblet.RuntimeSpecInfo.prototype.getVariantsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.RuntimeSpecInfo} returns this
 */
proto.joblet.RuntimeSpecInfo.prototype.setVariantsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.RuntimeSpecInfo} returns this
 */
proto.joblet.RuntimeSpecInfo.prototype.addVariants = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.RuntimeSpecInfo} returns this
 */
proto.joblet.RuntimeSpecInfo.prototype.clearVariantsList = function() {
  return this.setVariantsList([]);
};


/**
 * optional string architecture = 4;
 * @return {string}
 */
proto.joblet.RuntimeSpecInfo.prototype.getArchitecture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.RuntimeSpecInfo} returns this
 */
proto.joblet.RuntimeSpecInfo.prototype.setArchitecture = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.StreamTelemetryRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.StreamTelemetryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.StreamTelemetryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.StreamTelemetryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.StreamTelemetryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    typesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.StreamTelemetryRequest}
 */
proto.joblet.StreamTelemetryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.StreamTelemetryRequest;
  return proto.joblet.StreamTelemetryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.StreamTelemetryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.StreamTelemetryRequest}
 */
proto.joblet.StreamTelemetryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTypes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.StreamTelemetryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.StreamTelemetryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.StreamTelemetryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.StreamTelemetryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string job_uuid = 1;
 * @return {string}
 */
proto.joblet.StreamTelemetryRequest.prototype.getJobUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.StreamTelemetryRequest} returns this
 */
proto.joblet.StreamTelemetryRequest.prototype.setJobUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string types = 2;
 * @return {!Array<string>}
 */
proto.joblet.StreamTelemetryRequest.prototype.getTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.StreamTelemetryRequest} returns this
 */
proto.joblet.StreamTelemetryRequest.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.StreamTelemetryRequest} returns this
 */
proto.joblet.StreamTelemetryRequest.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.StreamTelemetryRequest} returns this
 */
proto.joblet.StreamTelemetryRequest.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.GetTelemetryRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.GetTelemetryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.GetTelemetryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.GetTelemetryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.GetTelemetryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    typesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    startTime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    endTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.GetTelemetryRequest}
 */
proto.joblet.GetTelemetryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.GetTelemetryRequest;
  return proto.joblet.GetTelemetryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.GetTelemetryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.GetTelemetryRequest}
 */
proto.joblet.GetTelemetryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTypes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.GetTelemetryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.GetTelemetryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.GetTelemetryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.GetTelemetryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getStartTime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEndTime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string job_uuid = 1;
 * @return {string}
 */
proto.joblet.GetTelemetryRequest.prototype.getJobUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.GetTelemetryRequest} returns this
 */
proto.joblet.GetTelemetryRequest.prototype.setJobUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string types = 2;
 * @return {!Array<string>}
 */
proto.joblet.GetTelemetryRequest.prototype.getTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.GetTelemetryRequest} returns this
 */
proto.joblet.GetTelemetryRequest.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.GetTelemetryRequest} returns this
 */
proto.joblet.GetTelemetryRequest.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.GetTelemetryRequest} returns this
 */
proto.joblet.GetTelemetryRequest.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};


/**
 * optional int64 start_time = 3;
 * @return {number}
 */
proto.joblet.GetTelemetryRequest.prototype.getStartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.GetTelemetryRequest} returns this
 */
proto.joblet.GetTelemetryRequest.prototype.setStartTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 end_time = 4;
 * @return {number}
 */
proto.joblet.GetTelemetryRequest.prototype.getEndTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.GetTelemetryRequest} returns this
 */
proto.joblet.GetTelemetryRequest.prototype.setEndTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 limit = 5;
 * @return {number}
 */
proto.joblet.GetTelemetryRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.GetTelemetryRequest} returns this
 */
proto.joblet.GetTelemetryRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.joblet.TelemetryEvent.oneofGroups_ = [[10,11,12,13]];

/**
 * @enum {number}
 */
proto.joblet.TelemetryEvent.DataCase = {
  DATA_NOT_SET: 0,
  METRICS: 10,
  EXEC: 11,
  CONNECT: 12,
  FILE: 13
};

/**
 * @return {proto.joblet.TelemetryEvent.DataCase}
 */
proto.joblet.TelemetryEvent.prototype.getDataCase = function() {
  return /** @type {proto.joblet.TelemetryEvent.DataCase} */(jspb.Message.computeOneofCase(this, proto.joblet.TelemetryEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.TelemetryEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.TelemetryEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.TelemetryEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.TelemetryEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    jobId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metrics: (f = msg.getMetrics()) && proto.joblet.TelemetryMetricsData.toObject(includeInstance, f),
    exec: (f = msg.getExec()) && proto.joblet.TelemetryExecData.toObject(includeInstance, f),
    connect: (f = msg.getConnect()) && proto.joblet.TelemetryConnectData.toObject(includeInstance, f),
    file: (f = msg.getFile()) && proto.joblet.TelemetryFileData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.TelemetryEvent}
 */
proto.joblet.TelemetryEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.TelemetryEvent;
  return proto.joblet.TelemetryEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.TelemetryEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.TelemetryEvent}
 */
proto.joblet.TelemetryEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 10:
      var value = new proto.joblet.TelemetryMetricsData;
      reader.readMessage(value,proto.joblet.TelemetryMetricsData.deserializeBinaryFromReader);
      msg.setMetrics(value);
      break;
    case 11:
      var value = new proto.joblet.TelemetryExecData;
      reader.readMessage(value,proto.joblet.TelemetryExecData.deserializeBinaryFromReader);
      msg.setExec(value);
      break;
    case 12:
      var value = new proto.joblet.TelemetryConnectData;
      reader.readMessage(value,proto.joblet.TelemetryConnectData.deserializeBinaryFromReader);
      msg.setConnect(value);
      break;
    case 13:
      var value = new proto.joblet.TelemetryFileData;
      reader.readMessage(value,proto.joblet.TelemetryFileData.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.TelemetryEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.TelemetryEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.TelemetryEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.TelemetryEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetrics();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.joblet.TelemetryMetricsData.serializeBinaryToWriter
    );
  }
  f = message.getExec();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.joblet.TelemetryExecData.serializeBinaryToWriter
    );
  }
  f = message.getConnect();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.joblet.TelemetryConnectData.serializeBinaryToWriter
    );
  }
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.joblet.TelemetryFileData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.joblet.TelemetryEvent.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryEvent} returns this
 */
proto.joblet.TelemetryEvent.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string job_id = 2;
 * @return {string}
 */
proto.joblet.TelemetryEvent.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.TelemetryEvent} returns this
 */
proto.joblet.TelemetryEvent.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.joblet.TelemetryEvent.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.TelemetryEvent} returns this
 */
proto.joblet.TelemetryEvent.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TelemetryMetricsData metrics = 10;
 * @return {?proto.joblet.TelemetryMetricsData}
 */
proto.joblet.TelemetryEvent.prototype.getMetrics = function() {
  return /** @type{?proto.joblet.TelemetryMetricsData} */ (
    jspb.Message.getWrapperField(this, proto.joblet.TelemetryMetricsData, 10));
};


/**
 * @param {?proto.joblet.TelemetryMetricsData|undefined} value
 * @return {!proto.joblet.TelemetryEvent} returns this
*/
proto.joblet.TelemetryEvent.prototype.setMetrics = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.joblet.TelemetryEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.TelemetryEvent} returns this
 */
proto.joblet.TelemetryEvent.prototype.clearMetrics = function() {
  return this.setMetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.TelemetryEvent.prototype.hasMetrics = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional TelemetryExecData exec = 11;
 * @return {?proto.joblet.TelemetryExecData}
 */
proto.joblet.TelemetryEvent.prototype.getExec = function() {
  return /** @type{?proto.joblet.TelemetryExecData} */ (
    jspb.Message.getWrapperField(this, proto.joblet.TelemetryExecData, 11));
};


/**
 * @param {?proto.joblet.TelemetryExecData|undefined} value
 * @return {!proto.joblet.TelemetryEvent} returns this
*/
proto.joblet.TelemetryEvent.prototype.setExec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.joblet.TelemetryEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.TelemetryEvent} returns this
 */
proto.joblet.TelemetryEvent.prototype.clearExec = function() {
  return this.setExec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.TelemetryEvent.prototype.hasExec = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional TelemetryConnectData connect = 12;
 * @return {?proto.joblet.TelemetryConnectData}
 */
proto.joblet.TelemetryEvent.prototype.getConnect = function() {
  return /** @type{?proto.joblet.TelemetryConnectData} */ (
    jspb.Message.getWrapperField(this, proto.joblet.TelemetryConnectData, 12));
};


/**
 * @param {?proto.joblet.TelemetryConnectData|undefined} value
 * @return {!proto.joblet.TelemetryEvent} returns this
*/
proto.joblet.TelemetryEvent.prototype.setConnect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.joblet.TelemetryEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.TelemetryEvent} returns this
 */
proto.joblet.TelemetryEvent.prototype.clearConnect = function() {
  return this.setConnect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.TelemetryEvent.prototype.hasConnect = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional TelemetryFileData file = 13;
 * @return {?proto.joblet.TelemetryFileData}
 */
proto.joblet.TelemetryEvent.prototype.getFile = function() {
  return /** @type{?proto.joblet.TelemetryFileData} */ (
    jspb.Message.getWrapperField(this, proto.joblet.TelemetryFileData, 13));
};


/**
 * @param {?proto.joblet.TelemetryFileData|undefined} value
 * @return {!proto.joblet.TelemetryEvent} returns this
*/
proto.joblet.TelemetryEvent.prototype.setFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.joblet.TelemetryEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.joblet.TelemetryEvent} returns this
 */
proto.joblet.TelemetryEvent.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.joblet.TelemetryEvent.prototype.hasFile = function() {
  return jspb.Message.getField(this, 13) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.TelemetryMetricsData.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.TelemetryMetricsData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.TelemetryMetricsData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.TelemetryMetricsData.toObject = function(includeInstance, msg) {
  var f, obj = {
    cpuPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    memoryBytes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    memoryLimit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    diskReadBytes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    diskWriteBytes: jspb.Message.getFieldWithDefault(msg, 5, 0),
    netRecvBytes: jspb.Message.getFieldWithDefault(msg, 6, 0),
    netSentBytes: jspb.Message.getFieldWithDefault(msg, 7, 0),
    gpuPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    gpuMemoryBytes: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.TelemetryMetricsData}
 */
proto.joblet.TelemetryMetricsData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.TelemetryMetricsData;
  return proto.joblet.TelemetryMetricsData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.TelemetryMetricsData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.TelemetryMetricsData}
 */
proto.joblet.TelemetryMetricsData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCpuPercent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemoryBytes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemoryLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDiskReadBytes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDiskWriteBytes(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNetRecvBytes(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNetSentBytes(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGpuPercent(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGpuMemoryBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.TelemetryMetricsData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.TelemetryMetricsData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.TelemetryMetricsData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.TelemetryMetricsData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCpuPercent();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMemoryBytes();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMemoryLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDiskReadBytes();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDiskWriteBytes();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getNetRecvBytes();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getNetSentBytes();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getGpuPercent();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getGpuMemoryBytes();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional double cpu_percent = 1;
 * @return {number}
 */
proto.joblet.TelemetryMetricsData.prototype.getCpuPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryMetricsData} returns this
 */
proto.joblet.TelemetryMetricsData.prototype.setCpuPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional int64 memory_bytes = 2;
 * @return {number}
 */
proto.joblet.TelemetryMetricsData.prototype.getMemoryBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryMetricsData} returns this
 */
proto.joblet.TelemetryMetricsData.prototype.setMemoryBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 memory_limit = 3;
 * @return {number}
 */
proto.joblet.TelemetryMetricsData.prototype.getMemoryLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryMetricsData} returns this
 */
proto.joblet.TelemetryMetricsData.prototype.setMemoryLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 disk_read_bytes = 4;
 * @return {number}
 */
proto.joblet.TelemetryMetricsData.prototype.getDiskReadBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryMetricsData} returns this
 */
proto.joblet.TelemetryMetricsData.prototype.setDiskReadBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 disk_write_bytes = 5;
 * @return {number}
 */
proto.joblet.TelemetryMetricsData.prototype.getDiskWriteBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryMetricsData} returns this
 */
proto.joblet.TelemetryMetricsData.prototype.setDiskWriteBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 net_recv_bytes = 6;
 * @return {number}
 */
proto.joblet.TelemetryMetricsData.prototype.getNetRecvBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryMetricsData} returns this
 */
proto.joblet.TelemetryMetricsData.prototype.setNetRecvBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 net_sent_bytes = 7;
 * @return {number}
 */
proto.joblet.TelemetryMetricsData.prototype.getNetSentBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryMetricsData} returns this
 */
proto.joblet.TelemetryMetricsData.prototype.setNetSentBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional double gpu_percent = 8;
 * @return {number}
 */
proto.joblet.TelemetryMetricsData.prototype.getGpuPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryMetricsData} returns this
 */
proto.joblet.TelemetryMetricsData.prototype.setGpuPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional int64 gpu_memory_bytes = 9;
 * @return {number}
 */
proto.joblet.TelemetryMetricsData.prototype.getGpuMemoryBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryMetricsData} returns this
 */
proto.joblet.TelemetryMetricsData.prototype.setGpuMemoryBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.joblet.TelemetryExecData.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.TelemetryExecData.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.TelemetryExecData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.TelemetryExecData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.TelemetryExecData.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    binary: jspb.Message.getFieldWithDefault(msg, 2, ""),
    argsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    exitCode: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ppid: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.TelemetryExecData}
 */
proto.joblet.TelemetryExecData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.TelemetryExecData;
  return proto.joblet.TelemetryExecData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.TelemetryExecData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.TelemetryExecData}
 */
proto.joblet.TelemetryExecData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBinary(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExitCode(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPpid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.TelemetryExecData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.TelemetryExecData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.TelemetryExecData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.TelemetryExecData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBinary();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getExitCode();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPpid();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 pid = 1;
 * @return {number}
 */
proto.joblet.TelemetryExecData.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryExecData} returns this
 */
proto.joblet.TelemetryExecData.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string binary = 2;
 * @return {string}
 */
proto.joblet.TelemetryExecData.prototype.getBinary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.TelemetryExecData} returns this
 */
proto.joblet.TelemetryExecData.prototype.setBinary = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string args = 3;
 * @return {!Array<string>}
 */
proto.joblet.TelemetryExecData.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.joblet.TelemetryExecData} returns this
 */
proto.joblet.TelemetryExecData.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.joblet.TelemetryExecData} returns this
 */
proto.joblet.TelemetryExecData.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.joblet.TelemetryExecData} returns this
 */
proto.joblet.TelemetryExecData.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * optional int32 exit_code = 4;
 * @return {number}
 */
proto.joblet.TelemetryExecData.prototype.getExitCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryExecData} returns this
 */
proto.joblet.TelemetryExecData.prototype.setExitCode = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 ppid = 5;
 * @return {number}
 */
proto.joblet.TelemetryExecData.prototype.getPpid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryExecData} returns this
 */
proto.joblet.TelemetryExecData.prototype.setPpid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.TelemetryConnectData.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.TelemetryConnectData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.TelemetryConnectData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.TelemetryConnectData.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0),
    protocol: jspb.Message.getFieldWithDefault(msg, 4, ""),
    localAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    localPort: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.TelemetryConnectData}
 */
proto.joblet.TelemetryConnectData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.TelemetryConnectData;
  return proto.joblet.TelemetryConnectData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.TelemetryConnectData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.TelemetryConnectData}
 */
proto.joblet.TelemetryConnectData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalAddress(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLocalPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.TelemetryConnectData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.TelemetryConnectData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.TelemetryConnectData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.TelemetryConnectData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLocalAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocalPort();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 pid = 1;
 * @return {number}
 */
proto.joblet.TelemetryConnectData.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryConnectData} returns this
 */
proto.joblet.TelemetryConnectData.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.joblet.TelemetryConnectData.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.TelemetryConnectData} returns this
 */
proto.joblet.TelemetryConnectData.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 port = 3;
 * @return {number}
 */
proto.joblet.TelemetryConnectData.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryConnectData} returns this
 */
proto.joblet.TelemetryConnectData.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string protocol = 4;
 * @return {string}
 */
proto.joblet.TelemetryConnectData.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.TelemetryConnectData} returns this
 */
proto.joblet.TelemetryConnectData.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string local_address = 5;
 * @return {string}
 */
proto.joblet.TelemetryConnectData.prototype.getLocalAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.TelemetryConnectData} returns this
 */
proto.joblet.TelemetryConnectData.prototype.setLocalAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 local_port = 6;
 * @return {number}
 */
proto.joblet.TelemetryConnectData.prototype.getLocalPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryConnectData} returns this
 */
proto.joblet.TelemetryConnectData.prototype.setLocalPort = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.joblet.TelemetryFileData.prototype.toObject = function(opt_includeInstance) {
  return proto.joblet.TelemetryFileData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.joblet.TelemetryFileData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.TelemetryFileData.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    operation: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bytes: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.joblet.TelemetryFileData}
 */
proto.joblet.TelemetryFileData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.joblet.TelemetryFileData;
  return proto.joblet.TelemetryFileData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.joblet.TelemetryFileData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.joblet.TelemetryFileData}
 */
proto.joblet.TelemetryFileData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperation(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.joblet.TelemetryFileData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.joblet.TelemetryFileData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.joblet.TelemetryFileData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.joblet.TelemetryFileData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOperation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBytes();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional uint32 pid = 1;
 * @return {number}
 */
proto.joblet.TelemetryFileData.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryFileData} returns this
 */
proto.joblet.TelemetryFileData.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.joblet.TelemetryFileData.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.TelemetryFileData} returns this
 */
proto.joblet.TelemetryFileData.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string operation = 3;
 * @return {string}
 */
proto.joblet.TelemetryFileData.prototype.getOperation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.joblet.TelemetryFileData} returns this
 */
proto.joblet.TelemetryFileData.prototype.setOperation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 bytes = 4;
 * @return {number}
 */
proto.joblet.TelemetryFileData.prototype.getBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.joblet.TelemetryFileData} returns this
 */
proto.joblet.TelemetryFileData.prototype.setBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.joblet);

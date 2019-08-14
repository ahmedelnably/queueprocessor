module.exports = async function (context, myQueueItem) {
    let retMsg = "Processing!"
    context.log('Enhanced Version processed the message', myQueueItem);
    context.bindings.outputQueueItem = retMsg;
};

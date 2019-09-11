module.exports = async function (context, myQueueItem) {
    let retMsg = "Processing!"
    context.log('Good Version processed the message.', myQueueItem);
    context.bindings.outputQueueItem = retMsg;
};

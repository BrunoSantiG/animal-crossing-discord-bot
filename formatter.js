const formatReply = (type, animalObject) => `${type} ${animalObject.name['name-USen']} custa ${animalObject.price} Bells!`;

module.exports = { formatReply };
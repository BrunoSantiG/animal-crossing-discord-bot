const formatReply = (type, animalObject) => `${type} ${animalObject.name['name-USen']} e vendido por ${animalObject.price} Bells!`;

module.exports = { formatReply };
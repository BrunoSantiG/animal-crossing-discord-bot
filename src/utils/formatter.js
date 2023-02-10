const formatReply = (prefix, animalObject) => `${prefix} ${animalObject.name['name-USen']} e vendido por ${animalObject.price} Bells!`;

module.exports = { formatReply };
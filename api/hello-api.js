/**
 * @swagger
 * resourcePath: /helloApiJs
 * description: All about API
 */

/**
 * @swagger
 * path: /hello
 * operations:
 *   -  httpMethod: GET
 *      summary: Get greetings
 *      notes: Returns greetings based on username
 *      responseClass: Greetings
 *      nickname: hello
 *      consumes:
 *        - text/html
 *      parameters:
 *        - name: username
 *          description: Your username
 *          paramType: query
 *          required: true
 *          dataType: string
 */
exports.hello = function (req, res) {
    var greetings = {};
    greetings.text = 'Hello, ' + req.param('username') + '!!!';
    res.json(greetings);
}

/**
 * @swagger
 * models:
 *   Greetings:
 *     id: Greetings
 *     properties:
 *       text:
 *         type: String
 */
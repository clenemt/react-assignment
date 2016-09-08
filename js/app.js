/* global ReactDOM, React, CustomerOrder */

(function () {

    /**
     * xhr get helper
     * @param  {String}   url - The get url.
     * @param  {Function} fn  - The success callback.
     */
    var get = (url, fn) => {
        var request = new XMLHttpRequest();
        request.open('GET', url);

        request.onreadystatechange = () => {
            if (request.readyState !== 4 || request.status !== 200) return;
            else fn(request);
        };

        request.send();
    };

  /**
   * Render the React root component.
   * @param  {Object} request - The xhr request.
   */
    var render = (request) => {
        var res;

        try {
            res = JSON.parse(request.responseText);
        } catch (e) {
            throw new SyntaxError('invalid data passed');
        }

        if (res && res.data) {
            ReactDOM.render(
                <CustomerOrder order={res.data} />,
                document.querySelector('.site')
            );
        }
    };

    // Starts the app
    get('data/data.json', render);

}());

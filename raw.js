/**
 * Created by thram on 4/08/16.
 */
import {tag} from "riot";
import {isUndefined} from "lodash";
tag('raw', '', function () {
  this.on('update', () => {
    if (!isUndefined(this.opts.html))
      this.root.innerHTML = this.opts.html.toString().replace(/\n$/, '').replace(/\n/g, '<br>');
  });
});

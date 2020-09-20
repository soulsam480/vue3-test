import path from "path";
import { remote } from "electron";

const Datastore = require('nedb-promises');
const db = Datastore.create(
  {
    filename: path.join(remote.app.getPath("userData"), "data/beta.db"),
    autoload: true
  }
);

db.load()
export default db
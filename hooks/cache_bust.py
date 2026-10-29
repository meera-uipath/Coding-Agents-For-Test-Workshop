"""Add a content hash to our own CSS and JS links (custom.css?v=1a2b3c4d).

GitHub Pages tells browsers to cache every file for 10 minutes, and our
extra_css / extra_javascript files keep the same name between deploys, so
browsers keep showing the old styles. A hash that changes with the file's
content gives the browser a new URL whenever the file changes.
"""

import hashlib
import os


def _versioned(path, docs_dir):
    if "://" in path or "?" in path:
        return path
    file_path = os.path.join(docs_dir, path)
    if not os.path.isfile(file_path):
        return path
    with open(file_path, "rb") as f:
        digest = hashlib.md5(f.read()).hexdigest()[:8]
    return f"{path}?v={digest}"


def on_config(config):
    docs_dir = config["docs_dir"]
    config["extra_css"] = [_versioned(p, docs_dir) for p in config["extra_css"]]
    for i, script in enumerate(config["extra_javascript"]):
        if isinstance(script, str):
            config["extra_javascript"][i] = _versioned(script, docs_dir)
        else:
            script.path = _versioned(script.path, docs_dir)
    return config

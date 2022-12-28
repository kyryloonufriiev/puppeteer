# Puppeteer Custom GitHub Actions

## Changed packages

This actions provides us with the data on which part of the mono-repo was changed.
This way we will not need to run the intensive test and will make PRs (especially small changes) easier to merge.

Example:
We create a PR with changes for `ng-schematics` package only test for it will run on GitHub Actions.
All other test will be skipped.

## Check Docs

This actions checks whether or not the docs need changing. Example would be and API change that need to be reflected
on the documentation website.

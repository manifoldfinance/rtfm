#!/usr/bin/env bash

export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1

#export "GIT_COMMIT_SHA=${GIT_COMMIT_SHA:-$(yarn --silent git:getCommitSHA)}"
#export "GIT_COMMIT_REF=${GIT_COMMIT_REF:-$(yarn --silent git:getCommitRef)}"
#export "GIT_COMMIT_TAGS=${GIT_COMMIT_TAGS:-$(yarn --silent git:getReleasesAndTags)}"
BUILD_HASH_VERSION=$(git rev-parse --short HEAD 2>/dev/null || find ./* -type f -name '*.go' -print0 | sort -z | xargs -0 sha1sum | sha1sum | sed -r 's/[^\da-f]+//g')

# shellcheck disable=SC2034
BUILD_HASH_VERSION="${LOAD_SCRIPT_COMMIT_SHA}"
# LOAD_SCRIPT_COMMIT_SHA='$(shell git rev-parse HEAD)' envsubst '$(addprefix $$,$(ENVSUBST_VARS))' < $< > $@
echo "$BUILD_HASH_VERSION"

echo "VERCEL_ENV: $VERCEL_ENV"

vercel() {
  if [[ "$VERCEL_ENV" == "production" ]]; then
    # Proceed with the build
    echo "✅ - Build can proceed"
    npx next build
    sleep 1
    npm run postbuild
    sleep 1
    exit 0

  else
    # Don't build
    echo "🛑 - Build cancelled"
    exit 1
  fi
}

if [ "$1" = "local" ]; then
  echo "🚀 - Deploying"
  vercel deploy --prod
fi

"$1"
echo "🆘 - ERROR: Command not found"
exit 127

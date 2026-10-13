#!/bin/zsh
set -eu
cd -- "$(dirname -- "$0")"

preview_url='http://localhost:4000'
if preview_page=$(curl --silent --fail --max-time 2 "$preview_url" 2>/dev/null); then
  if [[ "$preview_page" == *'Guanquan Zhu（朱冠全）'* ]]; then
    open "$preview_url"
    exit 0
  fi
fi

# Prefer the isolated Ruby installed for this project's local preview.
academicpages_ruby="$HOME/.cache/academicpages-ruby/bin"
if [[ -x "$academicpages_ruby/ruby" ]]; then
  export PATH="$academicpages_ruby:$PATH"
  export SDKROOT="$(xcrun --sdk macosx --show-sdk-path)"
fi

if ! command -v bundle >/dev/null 2>&1; then
  print '请先安装 Ruby 3.3 和 Bundler，详见 PERSONAL_SITE.md。'
  exit 1
fi

if ! bundle check >/dev/null 2>&1; then
  bundle config set --local path "$HOME/.cache/academicpages-gems"
  bundle install
fi

exec bundle exec jekyll serve --host 127.0.0.1 --port 4000 --force_polling --open-url

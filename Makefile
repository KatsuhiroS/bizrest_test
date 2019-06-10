.PHONY: init
init:
	yarn install
	bundle install
	bundle exec rails tmp:create
	bundle exec rails log:clear

.PHONY: cleanup-db
cleanup-db:
	bundle exec rails db:drop:all db:create:all RAILS_ENV=development

.PHONY: seed
seed:
	bundle exec rails db:seed RAILS_ENV=development

.PHONY: run
run:
	bundle exec rails s

.PHONY: test
test:
	bundle exec rails test

class ArticlesController < ApplicationController

    def index
        render component: "Articles", props: {articles: Article.all}
    end
end

class ArticlesController < ApplicationController

    def index
        render component: "Articles", props: {articles: Article.all}
    end
    
    def show
        render component: "Article", props: {article: Article}
    end

end

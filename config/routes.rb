Rails.application.routes.draw do
  get 'businesses/index'
  get 'businesses/show'
  get 'businesses/search'

  scope '/api' do
    resources :businesses do
      member do
        get :reviews
      end
    end
  end
end

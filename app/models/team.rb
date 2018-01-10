class Team < ApplicationRecord
	has_many :projects, dependent: :destroy
	has_many :users

	accepts_nested_attributes_for :users, allow_destroy: true
	include PublicActivity::Model
	tracked owner: Proc.new { |controller, model| controller.current_user }
end

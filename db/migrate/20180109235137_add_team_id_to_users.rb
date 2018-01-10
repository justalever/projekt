class AddTeamIdToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :team_id, :integer
  end
end

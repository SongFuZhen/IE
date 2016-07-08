class CreateCreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :create_projects do |t|
      t.string :project_name
      t.text :project_description
      t.integer :plan_id
      t.integer :invite_people
      t.integer :ie_structue_id
      t.string :target_id

      t.timestamps
    end
  end
end

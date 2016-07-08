json.array!(@create_projects) do |create_project|
  json.extract! create_project, :id, :project_name, :project_description, :plan_id, :invite_people, :ie_structue_id, :target_id
  json.url create_project_url(create_project, format: :json)
end

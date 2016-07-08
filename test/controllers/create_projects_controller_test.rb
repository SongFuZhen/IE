require 'test_helper'

class CreateProjectsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @create_project = create_projects(:one)
  end

  test "should get index" do
    get create_projects_url
    assert_response :success
  end

  test "should get new" do
    get new_create_project_url
    assert_response :success
  end

  test "should create create_project" do
    assert_difference('CreateProject.count') do
      post create_projects_url, params: { create_project: { ie_structue_id: @create_project.ie_structue_id, invite_people: @create_project.invite_people, plan_id: @create_project.plan_id, project_description: @create_project.project_description, project_name: @create_project.project_name, target_id: @create_project.target_id } }
    end

    assert_redirected_to create_project_url(CreateProject.last)
  end

  test "should show create_project" do
    get create_project_url(@create_project)
    assert_response :success
  end

  test "should get edit" do
    get edit_create_project_url(@create_project)
    assert_response :success
  end

  test "should update create_project" do
    patch create_project_url(@create_project), params: { create_project: { ie_structue_id: @create_project.ie_structue_id, invite_people: @create_project.invite_people, plan_id: @create_project.plan_id, project_description: @create_project.project_description, project_name: @create_project.project_name, target_id: @create_project.target_id } }
    assert_redirected_to create_project_url(@create_project)
  end

  test "should destroy create_project" do
    assert_difference('CreateProject.count', -1) do
      delete create_project_url(@create_project)
    end

    assert_redirected_to create_projects_url
  end
end

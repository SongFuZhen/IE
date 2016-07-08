class CreateProjectsController < ApplicationController
  before_action :set_create_project, only: [:show, :edit, :update, :destroy]

  # GET /create_projects
  # GET /create_projects.json
  def index
    @create_projects = CreateProject.all
  end

  # GET /create_projects/1
  # GET /create_projects/1.json
  def show
  end

  # GET /create_projects/new
  def new
    @create_project = CreateProject.new
  end

  # GET /create_projects/1/edit
  def edit
  end

  # POST /create_projects
  # POST /create_projects.json
  def create
    @create_project = CreateProject.new(create_project_params)

    respond_to do |format|
      if @create_project.save
        format.html { redirect_to @create_project, notice: 'Create project was successfully created.' }
        format.json { render :show, status: :created, location: @create_project }
      else
        format.html { render :new }
        format.json { render json: @create_project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /create_projects/1
  # PATCH/PUT /create_projects/1.json
  def update
    respond_to do |format|
      if @create_project.update(create_project_params)
        format.html { redirect_to @create_project, notice: 'Create project was successfully updated.' }
        format.json { render :show, status: :ok, location: @create_project }
      else
        format.html { render :edit }
        format.json { render json: @create_project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /create_projects/1
  # DELETE /create_projects/1.json
  def destroy
    @create_project.destroy
    respond_to do |format|
      format.html { redirect_to create_projects_url, notice: 'Create project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_create_project
      @create_project = CreateProject.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def create_project_params
      params.require(:create_project).permit(:project_name, :project_description, :plan_id, :invite_people, :ie_structue_id, :target_id)
    end
end

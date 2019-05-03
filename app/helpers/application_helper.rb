module ApplicationHelper
  EXTENSION = '.js'

  def javascript_entry_path
    packs_root = "#{Rails.root.to_s}/app/javascript/packs/"
    packs_path = "#{controller_path}/#{action_name}"

    if ! File.exist?("#{packs_root}#{packs_path}#{EXTENSION}")
      return "fallback"
    end
    return packs_path
  end
end

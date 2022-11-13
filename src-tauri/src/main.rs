#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use pulldown_cmark::{html, Options, Parser};


#[tauri::command]
fn render_to_html(value: &str) -> String {
    let options = Options::empty();
    let parser = Parser::new_ext(value, options);
    let mut html_output = String::new();
    html::push_html(&mut html_output, parser);

    return html_output;
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![render_to_html])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

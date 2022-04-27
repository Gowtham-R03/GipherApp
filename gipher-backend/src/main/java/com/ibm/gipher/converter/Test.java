//package com.ibm.gipher.converter;
//import com.google.gson.JsonObject;
//import com.google.gson.JsonParser;
//
//public class Test {
//
//	public static void main(String[] args) {
//		// TODO Auto-generated method stub
////		Original original = new Original();
////		
////		original.setId(10L);
////		original.setFrames("hello");
////		original.setHash("hash");
////		original.setHeight("height");
////		original.setMp4("mp4");
////		original.setMp4_size("size");
////		original.setSize("Size");
////		original.setUrl("hi");
////		original.setWebp("webp");
////		original.setWebp_size("webSize");
////		original.setWidth("width");
////		System.out.println(original);
////		String JsonOriginal = JsonUse.ConvertJavaToJson(original);
////		System.out.println(JsonOriginal);
////		
////		Original JavaOriginal = JsonUse.convertJsonToJava(JsonOriginal, Original.class);
////		System.out.println(JavaOriginal);
//		
//		String myJSON ="{\"browsers\":{\"firefox\":{\"name\":\"Firefox\",\"pref_url\":\"about:config\",\"releases\":{\"1\":{\"release_date\":\"2004-11-09\",\"status\":\"retired\",\"engine\":\"Gecko\",\"engine_version\":\"1.7\"}}}}}";  
//		//JSON Parser from Gson Library
//		JsonParser parser = new JsonParser();
//		//Creating JSONObject from String using parser
//		JsonObject JSONObject = parser.parse(myJSON).getAsJsonObject();
//		System.out.println("Object: "+JSONObject);
//		
//		String myJSON1 = JSONObject.toString();		
//		System.out.println("String: "+myJSON1);
//	}
//
//}

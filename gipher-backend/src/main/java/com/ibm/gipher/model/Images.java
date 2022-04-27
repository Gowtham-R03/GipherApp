//package com.ibm.gipher.model;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToMany;
//import javax.persistence.Table;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Entity
//@Table(name="imagesDb")
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//
//public class Images {
//	
//	
//	@Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long imageId;
//	
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn(name="org_id",referencedColumnName="imageId")
//	private List<Original> original = new ArrayList<>();
//	
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn(name="dwn_id",referencedColumnName="imageId")
//	private List<Downsized> downsized = new ArrayList<>();
//	
//	
//	
////	Original OriginalObject;
////	Downsized DownsizedObject;
////
////
////	 // Getter Methods 
////
////	 public Original getOriginal() {
////	  return OriginalObject;
////	 }
////
////	 public Downsized getDownsized() {
////	  return DownsizedObject;
////	 }
////
////	 // Setter Methods 
////
////	 public void setOriginal(Original originalObject) {
////	  this.OriginalObject = originalObject;
////	 }
////
////	 public void setDownsized(Downsized downsizedObject) {
////	  this.DownsizedObject = downsizedObject;
////	 }
//
////	List<Original> original = new ArrayList<>();
////	List<Downsized> downSized = new ArrayList<>();
////	public Images(List<Original> original, List<Downsized> downSized) {
////		super();
////		this.original = original;
////		this.downSized = downSized;
////	}
////	public Images() {
////		super();
////		// TODO Auto-generated constructor stub
////	}
////	public List<Original> getOriginal() {
////		return original;
////	}
////	public void setOriginal(List<Original> original) {
////		this.original = original;
////	}
////	public List<Downsized> getDownSized() {
////		return downSized;
////	}
////	public void setDownSized(List<Downsized> downSized) {
////		this.downSized = downSized;
////	}
////	@Override
////	public String toString() {
////		return "Images [original=" + original + ", downSized=" + downSized + "]";
////	}
//	
////	Original OriginalObject;
////
////
////	 // Getter Methods 
////
////	 public Original getOriginal() {
////	  return OriginalObject;
////	 }
////	 
////	 // Getter Methods 
////
////	 public Downsized getDownsized() {
////	  return DownsizedObject;
////	 }
////
////	 // Setter Methods 
////
////	 public void setOriginal(Original originalObject) {
////	  this.OriginalObject = originalObject;
////	 }
////	// Setter Methods 
////
////		 public void setDownsized(Downsized downsizedObject) {
////		  this.DownsizedObject = downsizedObject;
////		 }
////	 
////	 Downsized DownsizedObject;
//
//	 
//	
//}
//		
//	
//

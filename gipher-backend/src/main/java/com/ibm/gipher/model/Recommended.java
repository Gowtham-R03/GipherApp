package com.ibm.gipher.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@SuppressWarnings("serial")
@Entity
@Table(name="recommendedDb")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Recommended implements Serializable {
	
	 @Id
	    private String gipherId;
		
		private String url;
		private String recommendedBy;
		private String favoritedBy;
		private String title;
		private String userId;
		
		 @Column(name = "images", length = 100000)
		private String images;
	
	 
//	 @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	    @JoinColumn(name = "gipher_id")
//	 private Gipher gipher;
	  
	 
}

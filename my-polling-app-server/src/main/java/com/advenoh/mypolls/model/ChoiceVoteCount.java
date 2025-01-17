package com.advenoh.mypolls.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ChoiceVoteCount {
    private Long choiceId;
    private Long voteCount;
}

